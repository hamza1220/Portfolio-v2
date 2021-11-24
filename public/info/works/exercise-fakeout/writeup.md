<h2 class="sub-heading"> BACKGROUND </h2>
<h3 style="color:#ff5257;"> Cheat or being cheated? </h3>

Fitness trackers aim to make people
healthier by providing them visualized insights for their “body data.” However, people have
different motivations to use these devices. Ranging from lower
insurance costs and external rewards to wanting a better outlook on social media,
people’s motivations are diverse and constantly fluctuate.
These result in “fake outs” - users cheating the system to achieve the
above goals.

**The goal of this project was therefore to alter users’ mental models about what is beneficial
for their health and deter them from "faking out".**

<br>

<h2 class="sub-heading"> UNDERSTANDING THE PROBLEM FRAME </h2>

<h3 style="color:#ff5257;"> It’s hard to stay motivated. </h3>

Through secondary research and interviews, it was found that a common occurrence for users of fitness applications is to stop using them over time because of an intrinsic lack of motivation to work out. Due to this, there is an increased probability of users quitting the application, or faking out to receive rewards.

It was important to research more on what extrinsic motivation users have then so that it may potentially be targeted. We found out that motivation can be increased through a plethora of tools such as personalization, accessibility,
ease of use, reliability and rewards.

<h3 style="color:#ff5257;"> Narrowing the problem. </h2>

Using the results from primary and secondary research, we decided to use affinity diagramming to form more concrete clusters around the themes that were most important:

<iframe className="w-full" height="512" loading="lazy" src="https://miro.com/app/live-embed/o9J_ly5Mp20=/?moveToViewport=-548,-751,3741,2049" frameBorder="1" scrolling="yes" allowFullScreen></iframe>

The team therefore held another brainstorming session over the affinity diagram and concluded that we needed a solution that attempts to increase **motivation**.

> It was important to note though that motivation in the form of extrinsic rewards, or those that target instant
> gratification drive focuses away from what the actual goal is - to be healthier.

<h3 style="color:#ff5257;"> Target Demographic </h2>

A primary target for current fitness tracking apps are college-going students (Gowin et. al, 2015). Among this demographic, several students are unable to maintain healthy fitness habits using digital means because of conflicts with the workload,
education, and schedule (Ashton et. al, 2017).

This led us to our target user group:

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-3/5" src="/info/works/exercise-fakeout/college-student.svg" />
</div>

<br>

<h2 class="sub-heading"> CONSTRAINTS </h2>

<h3 style="color:#ff5257;"> The motivation-reward problem. </h3>

Further brainstorming led us to discover a problem we like to call the **motivation-reward problem.**
It starts with a lack of motivation. Instead of being motivated to be healthier and develop beneficial habits, users are
motivated instead by high extrinsic rewards that are not aligned with the overarching goal of being healthy. These extrinsic rewards end up turning the lack of motivation into misplaced motivation - the core behind "faking out".

Interviews with college students and the works of
(Radhakrishnan et. al, 2020) and (Harrison et. al, 2014) revealed that a **lack of
personalization** in current fitness tracking apps is a major factor that adds to a lack
of motivation.

A solution therefore needed to hit the sweet spot inbetween rewards and personalization:

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-full " src="/info/works/exercise-fakeout/motivation-reward-loop.png" />
</div>

<h3 style="color:#ff5257;"> How personalized? </h3>

Personalization was a broad term for us. For us, it meant making users
feel like the tracking application is made just for them. This would need to be achieved with a deep learning model that would train itself based on the user.

Moreover, with college
students, making sure their tracker understands and empathizes with their variable
studying schedule was vital, as revealed through semi-structured interviews. Therefore, we ideated on revamping the reward system
so that it furthers the
overarching goal - to be healthier - rather than extrinsic rewards that misalign
motivation.

> **Tldr**; We would attempt to cut off the extrinsic reasons why our demographic
> would fake out by keeping them stuck in the loop of continuing to use the app to get
> rewards that further your goal to be healthier, that keep you using the app again.

<h3 style="color:#ff5257;"> The Personalization Paradox. </h3>

While personalization was a very common theme that we encountered during
interviews and research, we concluded that we needed to also cater to something
known as the personalization paradox (Zhu et. al, 2021). It identifies two problems with high
personalized applications:

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-full" src="/info/works/exercise-fakeout/personalization-paradox.svg" />
</div>

These contraints were important to keep in mind when we brainstormed concepts.

<br>

<h2 class="sub-heading"> SKETCHES </h2>
<h3 style="color:#ff5257;"> Drawing it out. </h3>

Creating sketches were extremely helpful in understanding the feasibility of our concepts and helped us focus on what was really important.

<div class="flex flex-col w-4/5 pb-4">
<img loading="lazy"  class="w-4/5 mb-1" src="/info/works/exercise-fakeout/sketches1.jpg" />
<img loading="lazy"  class="w-4/5 mt-1" src="/info/works/exercise-fakeout/sketches2.jpg" />
</div>

<br>

<h2 class="sub-heading"> CONCEPTS </h2>

<h3 style="color:#ff5257;"> The user is in the driving seat. </h3>

<div class="flex justify-between"> 
    <div style="width: 48%" class="flex flex-col justify-evenly"> 
        
A solution to the self-reinforcing loop problem is to
always keep the user empowered to not only view the
information that has been learned about them but also
edit it as they wish.

The concept is to put the users in total control
of the information that the AI has learned about them and correct inaccuracies.

 </div>
<div style="width: 48%" class="flex justify-center">
<img loading="lazy"  
style="width: 60%"
        src="/info/works/exercise-fakeout/Profile.svg" />
</div>

</div>

<h3 style="color:#ff5257;"> Rewards Revamp. </h3>

Rewards need to be aligned with fitness goals, they should eliminate extrinsic motivations to fake out
and rather loop the user back into using the tracker.

This brings up a scenario where a college student has just got done with the first exercise in a lengthy cycling plan, let's say. Upon completion, they are "rewarded" with a _tailored and personalized_ congratulatory
message - for instance, a health fact that you have achieved based on the user's health data and
exercising goal. College students do like instant gratification!

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-full" src="/info/works/exercise-fakeout/rewards-revamp-1.svg" />
</div>

In a second scenario, consider a college student at the last exercise of their month-long plan. Upon completion, their reward turns out to be an in-app feature - a nutrition plan, as shown in the wireframes below.

**The idea here is to cut the basis for faking-out** - the reward from a fake-out in this case would **lead the user back to what they were avoiding in the first place**, fuzzying the motivation behind faking-out in the first place.

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-full" src="/info/works/exercise-fakeout/rewards-revamp-2.svg" />
</div>

<h3 style="color:#ff5257;"> Fine-tuned to your schedule. </h3>

The application also suggests exercises specifically tailored for a user and fits the
exercises in their schedule.

<div class="flex justify-between"> 
    <div style="width: 48%"> 
        
The third concept is to have a separate calendar feature that
lets you add one by yourself or export your lecture
schedule - and leave the rest to the application.

The goal is to provide tailored exercises that one can
fit into their schedule. And keeping the _personalization paradox_ in mind, these tailored exercises should be adjustable.

</div>
<div style="width: 48%; display:flex">
<img loading="lazy"  class="w-full" src="/info/works/exercise-fakeout/calender.svg" />
</div>

</div>

<br>

<h2 class="sub-heading"> EVALUATION, LIMITATIONS AND REFLECTION </h2>

<h3 style="color:#ff5257;"> Discovering the complexities. </h3>

Evaluation was conducted via usability testing with four participants. The goal was to see if they could easily navigate through the application and gauge their reaction over the high-level concepts.

While the results were positive, **the testing was limited because of the low number of participants**. In addition, personalization through an artificial intelligence model heavily depends on how well the algorithm is made.

We also discovered some shortcomings in our solutions. In "The user is in the driving seat", **we did not look into how too much information would be increasing cognitive load on the user**.

The "rewards revamp" concept seemed too simplistic and perhaps there were easier ways to induce the same effect. In addition, people might end up switching to other apps that already provide these features without earning them.

Finally, for the "fine-tuned to your schedule" concept, more consideration needed to be given to users who do not add everything to their schedule and those who do not strictly follow theirs. There are potentially **other factors than just time to consider as well** - context and location for instance.

<h5 class="flex justify-center"> Thank you for reading! </h5>

### References

<p style="font-size: 14px">
Ashton, L. M., Hutchesson, M. J., Rollo, M. E., Morgan, P. J., & Collins, C. E. (2017). Motivators and barriers to engaging in healthy eating and physical activity: A cross-sectional survey in young adult men. American journal of men's health, 11(2), 330-343
<br><br>
Gowin, M., Cheney, M., Gwin, S., & Franklin Wann, T. (2015). Health and fitness app use in college students: a qualitative study. American Journal of Health Education, 46(4), 223-230.
<br><br>
Harrison, D., Marshall, P., Berthouze, N., & Bird, J. (2014, September). Tracking physical activity: problems related to running longitudinal studies with commercial devices. In Proceedings of the 2014 ACM International Joint Conference on Pervasive and Ubiquitous Computing: Adjunct Publication (pp. 699-702).
<br><br>
Radhakrishnan, M., Misra, A., Balan, R. K., & Lee, Y. (2020, May). Gym Usage Behavior & Desired Digital Interventions: An Empirical Study. In Proceedings of the 14th EAI International Conference on Pervasive Computing Technologies for Healthcare (pp. 97-107).
<br><br>
Zhu, J., Dallal, D. H., Gray, R. C., Villareale, J., Ontañón, S., Forman, E. M., & Arigo, D. (2021). Personalization Paradox in Behavior Change Apps: Lessons from a Social Comparison-Based Personalized App for Physical Activity. Proceedings of the ACM on Human-Computer Interaction, 5(CSCW1), 1-21.
</p>
