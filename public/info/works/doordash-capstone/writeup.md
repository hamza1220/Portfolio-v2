> This is my master's capstone at the graduate UX program at Purdue University. It is not affiliated with DoorDash and was not done under employment from DoorDash.

<h2 class="sub-heading"> INTRODUCTION </h2>
<h3 style="color:#FF2F0A;"> Same old meal. </h3>

Doordash is a popular food ordering app used by young adults. However, people hesitate to try new restaurants or meals and tend to order the same meals they have tried before. This is because people don't want to spend money on food they may not like, and they do not trust recommendations and reviews from DoorDash or external websites.

This forms the problem space that I explore in this project: **the uncertainty and apprehension people face when wanting to try out
new food on Doordash.**

<br>

<h2 class="sub-heading"> RESEARCH </h2>
<h3 style="color:#FF2F0A;"> I'll get what they're having </h3>

To explore the problem space, I conducted five semi-structured interviews with young adults who frequently used DoorDash. Amongst many, one interesting theme that emerged was that participants identified friends with similar food tastes and valued their suggestions.

This was also inline with studies conducted into people's social behaviors and intentions when ordering food online. Hence, the question that lead my ideation was: **how might we use the food choices of a user's friends as a means of encouraging them to try new food?**

<br/>

<h2 class="sub-heading"> IDEATION </h2>
<h3 style="color:#FF2F0A;"> Getting the creative juices flowing. </h3>

I brainstormed several ways in which friend suggestions could be used to tackle the problem. These included the ability to add friends on DoorDash, view their profiles, be able to suggest specific meals via a DM on the app, a feed including recent orders, and so on.

Based on concept testing of all the designs, I narrowed down to the inclusion of specific friend suggestions for 3 levels: restaurants, meals and meal customization. Moreover, the need for a feed and friend profiles appeared to have potential as a solution as well. Late iteration sketches of these are shown below:

<div class="flex justify-center w-full">
            <img loading="lazy" class="w-4/5" src="/info/works/doordash-capstone/doordash-sketches.jpeg" />
</div>

After getting favourable feedback from testing, I moved on to looks-like (hi-fidelity) prototypes using Figma.

<h2 class="sub-heading"> DESIGN </h2>
<h3 style="color:#FF2F0A;"> Friends' Picks </h3>

<div class="flex justify-between mb-10"> 
    <div style="width: 48%" class="flex flex-col justify-evenly">

One proposed feature is "Friends' Picks", which lists friends who recently ordered
from the restaurant. Avatars for friends who frequently order from that restaurant are
shown.

The first pain point in a user's journey was feeling overwhelmed by the large number of restaurants to choose from. The concept of Friend's Picks could help users feel more inclined to try a new restaurant when they see that their friends have been ordering from there frequently.

</div>

<div style="width: 48%" class="flex justify-center mb-10">
<img loading="lazy" class="w-full" src="/info/works/doordash-capstone/home.png" />
</div>
</div>

<div class="flex justify-between"> 
        <div style="width: 48%" class="flex justify-center">
            <img loading="lazy" class="w-full" src="/info/works/doordash-capstone/menu2.png" />
        </div>
<div style="width: 48%" class="flex flex-col justify-center">

Once a user has chosen a new restaurant based on confidence from their
added friends, they are presented with the menu. Here, the user can see
specific meals that his friends have preferred in the past as well.

This helps with the second pain point in the user journey - choosing a meal.

</div>
</div>

<br>

<div class="flex justify-between mb-10"> 
    <div style="width: 48%" class="flex flex-col justify-center">

Users can also view their friends choices in meal customizations as well, if the meal allows it. This further aims to help users with their third pain point on their journey - customizing their new meal.

</div>

<div style="width: 48%" class="flex justify-center mb-10">
<img loading="lazy" class="w-full" src="/info/works/doordash-capstone/meal-selection.png" />
</div>
</div>

<h3 style="color:#FF2F0A;"> Friends' Feed </h3>

<div class="flex justify-between"> 
    <div style="width: 48%" class="flex flex-col justify-evenly">

As a user's friend list on the app grows, there is a need for a separate space where they can view their friends' activity, including the ability to specifically view orders from particular friends for inspiration. This would help users easily keep track of their friends' food-related activities and get inspiration for their own orders.

To tackle this, I added a friends' feed feature that allows users to view their friends' recent orders, including contents and reviews. Users can also comment on meals for more information, potentially boosting their confidence in trying that meal out.

</div>
<div style="width: 48%" class="flex justify-center mb-10">
<img loading="lazy" class="w-full" src="/info/works/doordash-capstone/gif3.gif" />
</div>
</div>

<h3 style="color:#FF2F0A;"> Bringing in-person discovery to the app </h3>

Through the proposed designs, users can now potentially discover new restaurants and meals on DoorDash, but their primary discovery process still happens in-person due to concerns about app-specific costs such as inflated prices, service fees, delivery fees, and higher tips.

This presented an opportunity: **how might we incorporate the in-person discovery to Doordash?** To tackle this, I propose an ambitious concept described below.

<div class="flex justify-between"> 
        <div style="width: 48%" class="flex justify-center">
            <img loading="lazy" class="w-full" src="/info/works/doordash-capstone/gif4.gif" />
        </div>
<div style="width: 48%" class="flex flex-col justify-center">

Once a user orders and eats a new meal in-person, they may scan a QR code on their receipt, which opens the DoorDash app on their phone. The app recognizes the order and the restaurant, and prompts the user to add in some optional comments and share to their profile.

But why would a user do this? There needs to be an incentive, a reward system. I propose DashPoints, which can be earned for ordering either in-person or through the app, and redeemed later for cash.

</div>
</div>

The idea is for users to share their in-person discoveries to DoorDash, which would increase discoverability for their friends. Conversely, if a user's friends do the same, then the user will be helped. This feature is a two way street!

<br/>

<div class="flex justify-between"> 
        <div style="width: 48%" class="flex justify-center">
            <img loading="lazy" class="w-full" src="/info/works/doordash-capstone/notification.png" />
        </div>
<div style="width: 48%" class="flex flex-col justify-center">

However, if a user tends to not get a printed receipt, they may key-in their phone number on the card scanning machine to link their order with DoorDash. DoorDash would recognize the order and send the user a notification, prompting them to share the order to their profile.

This would entail some collaboration between the restaurant and DoorDash but will work similar to existing interactions such as rewards at Target.

</div>
</div>

Feel free to play around with the interactive prototypes of the three design concepts discussed above:

<div class="iframe-container">
<iframe class="responsive-iframe" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGX1cHVrSy7BLwkXdyWSHYg%2FCapstone-(Copy)%3Fpage-id%3D0%253A1%26node-id%3D117-277%26viewport%3D1461%252C-390%252C0.17%26scaling%3Dscale-down%26starting-point-node-id%3D117%253A277%26show-proto-sidebar%3D1" allowfullscreen></iframe>
</div>

<br/>

<h2 class="sub-heading"> EVALUATION </h2>
<h3 style="color:#FF2F0A;"> Does it work? </h3>

As always, my design process was a highly non-linear one. I conducted several rounds of concept testing and cognitive walkthroughs throughout ideation. I've eaten a lot of details in this summary such as interview analysis, sketching, wireframing and limitations. However, I'd love to discuss all those - send me an email!

<h5 class="flex justify-center"> Thank you for reading! </h5>
