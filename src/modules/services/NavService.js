export function resolveNavEvent(key, navTree) {
    switch (key) {
        case 'enter':
            navTree.el.click();
            break;
    }
}