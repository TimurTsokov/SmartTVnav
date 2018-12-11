export function resolveNavEvent(key, navTree) {
    console.log('!', key, navTree);
    switch (key) {
        case 'enter':
            navTree.el.click();
            break;
    }
}