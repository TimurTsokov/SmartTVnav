import React, {PureComponent} from 'react';
import './TVPageContainer.scss';
import Player from '../Player/Player';
import {connect} from 'react-redux';
import {GetChannels, OpenStream} from '../../store/actions/ChannelsActions';
import CategoryListItem from './Components/CategoryListItem/CategoryListItem';
import ChannelListItem from './Components/ChannelListItem/ChannelListItem';
import TvServerService from '../../modules/ServerServices/TvServerService';

const TvService = new TvServerService;

class TvPageContainer extends PureComponent {

    constructor() {
        super();
        this.state = {
            currentCategoryId: 1000,
            sortedCategories: null
        };
        this.player = React.createRef();
    }

    componentWillMount() {
        this.props.GetChannels(this.props.authToken).then(() => {
                if (this.props.categories) {
                    const sortedCategories = this.props.categories.sort((a, b) => {
                            return a.order - b.order;
                        }
                    );
                    this.setState({
                        ...this.state,
                        sortedCategories: sortedCategories
                    })
                }
            }
        )
    }

    _openCategory = (id) => {
        this.setState({
            ...this.state,
            currentCategoryId: id
        })
    };

    _updateStream = (streamId) => {
        TvService.UpdateStream(this.props.authToken, streamId)
    };

    _playChannel = (channelId, epgId) => {
        TvService.OpenStream(this.props.authToken, channelId, epgId).then(response => {
            const playbackUrl = 'http://' + response.http_stream.host.address + ':' + response.http_stream.host.port + response.http_stream.url;
            if (response.update_interval) {
                const updateStreamInterval = setInterval(() => {
                    this._updateStream(response.stream_id);
                }, response.update_interval * 1000);
            }
            console.log(this.player.current);
            this.player.current.load();
            this.player.current.play();
        })
    };

    render() {
        let channels = [],
            categories = [];

        if (this.state.sortedCategories) {
            categories = this.state.sortedCategories.map(category => {
                return (
                    <CategoryListItem _openCategory={this._openCategory}
                                      id={category.id}
                                      key={category.id}>{category.caption}</CategoryListItem>
                )
            });

            channels = this.props.channels.map(channel => {

                if (this.state.currentCategoryId === 1000) {
                    //Категория "Все"
                    return (
                        <ChannelListItem _playChannel={this._playChannel}
                                         id={channel.id}
                                         key={channel.id}>{channel.name}</ChannelListItem>
                    )
                } else if (channel.category.indexOf(this.state.currentCategoryId) !== -1) {
                    return (
                        <ChannelListItem _playChannel={this._playChannel}
                                         key={channel.id}>{channel.name}</ChannelListItem>
                    )
                }
            });
        }

        return (
            <div className={"container tv" + (this.props.visible ? ' visible' : '')}>
                <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ref={this.player} type="video/mp4" />
                <div className={"playlist"}>
                    <div className={"category__list"}>
                        {categories}
                    </div>
                    {channels}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authToken: state.signUp.authToken,
        channels: state.tv.channels,
        categories: state.tv.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetChannels: (authToken) => dispatch(GetChannels(authToken)),
        OpenStream: (authToken, channelId, epgId) => dispatch(OpenStream(authToken, channelId, epgId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvPageContainer);
