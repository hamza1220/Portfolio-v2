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

<h2 class="sub-heading"> UNDERSTANDING THE PROBLEM FRAME </h2>

<h3 style="color:#ff5257;"> It’s hard to stay motivated. </h3>

Through secondary research and interviews, it was found that a common occurrence for users of fitness applications is to stop using them over
time because of an intrinsic lack of motivation to work out. Due to this lack of
motivation and desire to stay fit, there is an increased probability of users quitting
the application and possibly faking out to achieve rewardspresent in the
application.

It was important to research more on what extrinsic motivation users have then so that it may potentially be targeted. We found out that motivation can be increased through a plethora of tools such as personalization, accessibility,
ease of use, reliability and rewards.

<h3 style="color:#ff5257;"> Narrowing the problem. </h2>

We identified some gaps and consequently brainstormed questions
that we felt we needed to answer:

<ul>
<li>What fake-outs are and why people do it </li>
<li>Understanding the mechanics of fitness trackers and applications </li>
<li> Current reward mechanisms - do they work or not </li>
<li> People's mental models about exercise </li>
</ul>

First, we found out how most current fitness tracking apps target college-going
students (Gowin et. al, 2015). Among this demographic, several students are unable to maintain
healthy fitness habits using digital means because of conflicts with the workload,
education, and schedule (Ashton et. al, 2017).

Our target **demographic** therefore was **college-going, non-Athletes, irregularly
working out** individuals.

We also decided that we need a solution that targets motivation - interview findings
suggested that this was possibly the root issue with the target demographic.

> It was important to note though that motivation in the form of extrinsic rewards, or those that target instant
> gratification drive focuses away from what the actual goal is - to be healthier.

<h2 class="sub-heading"> CONSTRAINTS </h2>

<h3 style="color:#ff5257;"> The motivation-reward loop. </h3>

**Concept mapping** let us to discover the motivation-reward loop.
The loop starts with either a lack of motivation or misplaced motivation.
Instead of being motivated to be healthier and develop beneficial habits, users are
motivated by high extrinsic rewards that are not aligned with the overarching goal of being healthy. These extrinsic rewards potentially lead the users to use other means to achieve the set goals and obtain instant gratification.

Interviews with college students and the works of
(Radhakrishnan et. al, 2020) and (Harrison et. al, 2014) revealed that a lack of
personalization in current fitness tracking apps is a major factor that adds to a lack
of motivation. Additionally, a combination of the two: rewards in the form of
social media’s instant gratification, gamification rewards, or extrinsic/monetary
rewards, and a lack of personalization, lead to fake outs.

<div class="flex justify-center w-full">
<img class="w-full " src="/info/works/exercise-fakeout/motivation-reward-loop.png" />
</div>

<h3 style="color:#ff5257;"> So, back to the loop. </h3>

After further brainstorming sessions, we decided to tackle motivation
through a high level of personalization - essentially making users
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

1.&nbsp;_The self-reinforcing loop problem_: When a personalization system “forces”
a user into following whatever it categorizes, regardless of accuracy. Think of Netflix recommending you sci-fi movies everyday just because you watched one out of curiosity.

2.&nbsp;_The moving target problem_: The model should adapt and grow with the user at their pace.

These contraints were important to keep in mind when we brainstormed concepts.

<h2 class="sub-heading"> SKETCHES </h2>
<h3 style="color:#ff5257;"> Drawing it out. </h3>

Creating sketches were extremely helpful in understanding the feasibility of our concepts and helped us focus on what was really important.

<div class="flex justify-center w-full pb-4">
<img class="w-full" src="/info/works/exercise-fakeout/sketches1.jpg" />
</div>

<h2 class="sub-heading"> CONCEPTS </h2>

<h3 style="color:#ff5257;"> The user is in the driving seat. </h3>

<div class="flex justify-between"> 
    <div style="width: 48%"> 
        
A solution to the self-reinforcing loop problem is to
always keep the user empowered to not only view the
information that has been learned about them but also
edit it as they wish.

Therefore, the user’s profile screen has multiple edit options which help to enable or
disable the information about them that the application
can collect or use to provide a tailored experience for
them. The concept is to put the users in total control
of the information that the AI has learned about them and correct inaccuracies.

 </div>
<div style="width: 48%" class="flex justify-center">
<img 
style="width: 60%"
        src="/info/works/exercise-fakeout/Profile.svg" />
</div>

</div>

<h3 style="color:#ff5257;"> Rewards Revamp. </h3>

Rewards need to be aligned with fitness goals, they should eliminate extrinsic motivations to fake out
and rather loop the user back into using the tracker.

This brings up a scenario where a college student has just got done with the first exercise in a lengthy cycling plan, let's say. Upon completion, they are "rewarded" with a _tailored and personalized_ congratulatory
message - for instance, a health fact that you have achieved based on your health data and
exercising goal. College students do like instant gratification!

<div class="flex justify-center w-full">
<img class="w-full" src="/info/works/exercise-fakeout/rewards-revamp-1.svg" />
</div>

In a second scenario, consider a college student at the last exercise of their month-long plan. Upon completion, their reward turns out to be an in-app feature - a nutrition plan in the wireframes below.

**The idea here is to cut the basis for faking-out** - the reward from a fake-out in this case would **lead the user back to what they were avoiding in the first place**, fuzzying the motivation behind faking-out in the first place.

<div class="flex justify-center w-full">
<img class="w-full" src="/info/works/exercise-fakeout/rewards-revamp-2.svg" />
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
<img class="w-full" src="/info/works/exercise-fakeout/calender.svg" />
</div>

</div>

<h2 class="sub-heading"> EVALUATION, LIMITATIONS AND REFLECTION </h2>

<h3 style="color:#ff5257;"> Discovering the complexities. </h3>

This was my first UX research project at Purdue and it was a great learning experience. Going through a non-linear design process involving secondary research, affinity diagramming, conducting interviews, sketching, iterating over concepts and evaluation was vital in learning how to build a strong design rationale for my concepts.

I conducted evaluation via usability testing with four participants. The goal was to see if they could easily navigate through the application and gauge their reaction over the high-level concepts. While the results were positive, **the testing was limited in not only the number of participants** but also in evaluating the most important concept - personalization through AI. The concept itself is highly dependant on how well the developers make the model. The discovery of the **personalization paradox** added a thick layer of complexity to the concept as well.

In-line with my personal design philosophy of always being critical, I concluded the project by **setting up a brainstorming session to disprove our concepts**. This resulted in finding several limitations that we did not cater to and removed our confirmation biases.

For instance, in "The user is in the driving seat", **we did not look into how too much information would be increasing the cognitive load on the user**.

The "rewards revamp" concept seemed too simplistic and perhaps there were easier ways to induce the same effect. The **efficacy of this concept was also something that usability testing would not and did not provide**. In addition, people might end up switching to other apps that already provide these features without earning them.

For the "fine-tuned to your schedule" concept, more consideration needed to be given to users who do not add everything to their schedule and those who do not strictly follow theirs. There are potentially **other factors than just time to consider as well** - context and location for instance.

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
