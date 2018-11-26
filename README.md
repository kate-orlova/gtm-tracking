# GTM Tracking
GTM Tracking is an open source library supporting an integration with [Google Tag Manager](https://developers.google.com/tag-manager/) (GTM) using a [Data Layer](https://developers.google.com/tag-manager/devguide#datalayer) in order to capture and report on the users' activity on a website.

Key classes implementing the core functionality are
1. GTM class extends the standard _window.dataLayer.push()_ method;
2. BaseElement class defines a basic element with the commin properties and methods;
3. CtaEventTracker class implements an event handler for tracking by data attributes.

Once you have integrated this library into your solution, you can simply specify the required data attributes to the elemnets you want to track. For example, for a button element you can specify the data attributes as follows:
_<button track-category="Your tracking category" track-label="Your tracking label" />_

# Contribution
Hope you found this library helpful, your contributions and suggestions will be very much appreciated. Please submit a pull request.
