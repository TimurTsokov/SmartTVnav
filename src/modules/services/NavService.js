export function resolveNavEvent(key, navTree) {
    switch (key) {
        case 'enter':
            console.log(navTree);
            navTree.el.click();
            break;
    }
}