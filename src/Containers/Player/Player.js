import React, {Fragment, PureComponent} from 'react';
import './Player.scss';

class Player extends PureComponent {
    constructor() {
        super();
        this.player = React.createRef();
    }

    componentWillMount () {
        console.log('willMount', this);

    }

    componentDidMount() {
        console.log('didMount', this);
    }

    Play(url) {

            console.log(this);



        // this.player.current.load();
        // this.player.current.play()
    }


    render() {
        return (
            <Fragment>
                <video type="video/mp4" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ref={this.player}/>
                <button onClick={() => this.Play()}>Click</button>
            </Fragment>
        );
    }
}

export default Player;