class GTM {
    push(category, action, label) {
        if (window.dataLayer) {
            window.dataLayer.push(Object.assign(
                {
                    event: 'eventTrack'
                },
                {
                    eventCategory: category,
                    eventAction: action,
                    eventLabel: label
                }
            ));
        }
    }
}
