<h2 class="sub-heading"> CONCEPT </h2>
<h3 style="color:#E06D10;"> Stale-While-Revalidate. </h3>

An important part of a website's UX is its performance, i.e how fast its pages load. One way to achieve higher performance is via caching.

The idea is to have a mechanism that only sends a request to the backend when absolutely necessary. Instead, the goal is to attempt to always serve data from the cache and refresh it in the background when required.

<br>

<h2 class="sub-heading"> LOGIC </h2>
<h3 style="color:#E06D10;"> Three Levels. </h3>

To establish a robust caching mechanism, I implemented three levels to the cache; fresh, stale, and purgeable.

It might help to think of these as three separate caches, however, in reality, there is just one cache. The cache is simply a key-value store; it just kept three different types of keys, the value is whatever
response the origin server returns (JSON obj, HTML page, etc).

The three levels are described below:

- **Fresh**: Contains the most recent response from the origin server. This is keyed against the
  request object from the caught event. I set the fresh cache limit to 30 seconds.
  <br></br>
- **Stale**: Contains responses that have exceeded the 30 second limit for the fresh
  cache. This can also contain older data (e.g, the older profile of a user after they have
  updated their name). This is keyed against a URL object. I set the stale cache expiry limit to 24 hours.
  <br></br>
- **Purgeable**: This level is to keep track of what entries in the cache have been purged
  (i.e deleted externally somewhere). This lets the worker know when to queue a
  background refresh.

The working of the three-level caching setup is best understood by the flowchart below:

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-full" src="/info/works/cloudflare-cache/cache-levels.png" />
</div>

This logic was implemented through a _Cloudflare Worker_, written in NodeJS.

<h3 style="color:#E06D10;"> Purging. </h3>

In the above flow, the assumption was that purging just happened externally. However, I handled that in the codebase using Cloudflare API's Python wrapper.

As an example, whenever a user updated their profile and clicked save, its backend handler would
call the API to purge the purgeable cache entry for that page's particular URL - in this case, that user's profile.
