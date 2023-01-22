<h2 class="sub-heading"> PROBLEM </h2>
<h3 style="color:#3C5CA8;"> Low weapon immersion </h3>

Virtual reality combat gaming allows users to use their controllers to interact with
in-game weapons such as guns and swords. However, current mainstream virtual
reality games do not incorporate a sense of the grabbed object’s weight which
decreases immersion.

This study therefore aimed to improve
weapon immersion in virtual reality by two methods: **incorporating a more complex
button mechanism to grab and interact with weapons**, and **using cardboard
prototypes to simulate weapon weight and structure**. This was evaluated by creating two different scenes in Unity, described below.

<br>
<h2 class="sub-heading"> Methods </h2>
<h3 style="color:#3C5CA8;"> More buttons, more weight? </h3>

The first scene (Scene A) was to test the usage of using a complex series of button
and trigger presses to use weapons. The scene consisted of three medieval weapons;
a long-sword, a shield and an axe.

- The long-sword could only be picked up and used
  if all both triggers (index triggers and hand triggers) from both controllers were
  pressed.
- The shield could be picked up by either pressing the index and hand trigger of the left
  controller, or the right controller.
- Finally, the axe, which was much smaller, could be
  picked up using just the hand trigger from any one of the controllers.

The goal was to test whether this button mapping would give users a
perception of weight by adding difficulty in picking up and using the sword.

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-full" src="/info/works/vr-fps/vr-1.png" />
</div>
<br>

<h3 style="color:#3C5CA8;"> Cardboard prototyping </h3>

The second scene (Scene B) consisted of three modern weapons, which differed in
weight primarily; these were a single handed Uzi, a rifle, and then a heavy machine
gun.

Three variants of cardboard prototypes of the weapons were
created. Weight was added by using recycled plastic pipes a water
bottle, which was filled in varying volumes. The shape of the prototypes was designed to closely resemble the weapon’s model in the virtual environment.

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-full" src="/info/works/vr-fps/vr-2.png" />
</div>
<br>

> In this scene, there was no complexity introduced with buttons presses.

<h2 class="sub-heading"> EVALUATION </h2>
<h3 style="color:#3C5CA8;"> More buttons, more weight? Not really. </h3>

Scene A was tested with two participants: P1 and P2. Based on test results, it was concluded that there is a poor co-relation between complex button presses and perception of weight.

For instance, P1 expressed that pressing multiple buttons got in the
way of their experience. Similarly, it was observed that P2 took significantly longer to pick up the
weapons because they found it difficult to adjust their controller's mental model to the one that was used in the scene.

P2 also felt that the sword in the digital environment did not feel so heavy, and the complicated
button pressing did not provide a perception of weight, rather made it difficult to interact with the objects for too long.

<h3 style="color:#3C5CA8;"> Cardboard weapons FTW </h3>

Scene B was tested with two different participants as well: P3 and P4. Both revealed an increased immersion using the cardboard gun prototypes.

<div class="flex flex-col justify-center w-full">
<img loading="lazy" class="w-full" src="/info/works/vr-fps/vr-3.png" />
<img loading="lazy" class="w-3/4 mt-2" src="/info/works/vr-fps/vr-4.png" />
</div>
<br>

Participants thoroughly enjoyed the experience of holding the rifle prototype as they got to
hold the controllers like they would hold a real rifle instead of swaying controllers
in the open space.

They also mentioned how the _“weight
difference was significant”_ between the uzi and the machine gun prototype, which led to better immersion in the game. Making the uzi one-handed, and the heavier machine gun two handed was also received positively.

<h2 class="sub-heading"> Limitations </h2>

Like all projects, this one had some limitations as well. First, the
use of the OVR kit for VR development did not allow an easy way to implement two
handed grabbing of objects. The current implementation simply checked whether
the right triggers were pressed on both controllers, but only one hand was actually
attached with the object. This decreased immersion particularly with users who
tested Scene A.

Secondly, in Scene B, participants had to be asked to pause the
game every time, before using a new weapon, to allow them to fit their controllers
with the cardboard prototypes. This had a negative impact on immersion.

<h5 class="flex justify-center"> Thank you for reading! </h5>
