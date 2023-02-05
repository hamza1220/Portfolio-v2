> <div class="contribution-statement">
>
> **Contribution Statement**
>
> - Project Owner; Drafted implementation documents and presented POC, setup milestones, project plan and follow-up tasks.
> - Team Lead; Led a group of 3 software engineers, ensured division of work, tracked progress, assisted where necessary.
> - Software Engineer; Wrote initial code for POC, implemented 30% of dark mode, worked on follow-ups.
>
> </div>

<h2 class="sub-heading"> PRE-REQUISITES </h2>
<h3 style="color:#3C5CDE;"> Setting things up. </h3>

Dark mode was the most requested feature during my time as a software engineer for [Educative, Inc](https://www.educative.io). More and more learners wanted to consume the text-heavy content on the website on a dark theme.

I therefore took the lead on the project - however, there were several pre-requisites that needed to be done before actual work could start.

<h3 style="color:#3C5CDE;"> A whole lotta libraries. </h3>

One of the biggest challenges was unifiying the legacy libraries that the website used at that time. These included [Styled-Components](https://styled-components.com/) and [Material UI](https://material.io/). Concurrently, I was also leading the effort to unify the design system to a single library, [Tailwindcss](https://tailwindcss.com/). Tailwindcss allows a simple way to implement dark mode using their `dark:` prefix; however, it can not work with multiple libraries.

Given the shipping deadline, it was not going to be feasible to first convert the thousands of lines of legacy CSS to Tailwindcss. Therefore, upon some research, I was able to find a helper library that could help us ship dark mode _before_ the design was ever unified.

<h3 style="color:#3C5CDE;"> One library to rule them all? </h3>

[Twin.Macro](https://github.com/ben-rogerson/twin.macro) was the library I pitched forward to use. In a nutshell, it is able to convert Tailwind classes into CSS objects and shares them with the CSS-in-JS library being used (Styled-Components, in this case).

This allowed us to write Tailwind code within Styled-Components. The ability to use Tailwind classes in CSS-in-JS syntax also allowed us to gradually remove Material-UI styles as well.

<br>

<h2 class="sub-heading"> IMPLEMENTATION </h2>
<h3 style="color:#3C5CDE;"> Division of labor. </h3>

The first thing that was needed was a color palette and a design guide, to ensure consistency. I therefore collaborated with the UX team to come up with a dark mode color palette that not only aligned with the company's main color scheme and but also ensured readibility. There were several SVGs, GIFs and PNGs that were hardcoded for light mode; they all also needed to have dark mode versions.

> An interesting challenge was to know when we needed two seperate files for an image and when we could just use one file with some
> custom dark mode css using Tailwind's `dark:` prefix.
>
> For the former option, the webpage would load both files everytime, which
> is bad for performance. The latter option was extremely difficult to do with large, complex SVGs.

A lot of attention to detail was required. For instance, the contrast ratios needed to be perfect for **every** element, such as buttons, hover states and dropdowns. Consider the hover states of the primary buttons below for instance:

<br>

<div class="flex justify-between"> 
    <div style="width: 48%" class="flex flex-col justify-evenly">
    <img loading="lazy" class="w-full" src="/info/works/dark-mode/dark-mode-button-1.gif" />
</div>
<div style="width: 48%" class="flex justify-center">
    <img loading="lazy" class="w-full" src="/info/works/dark-mode/dark-mode-button-2.gif" />
</div>
</div>
<br>

Now it needed a big effort from several people to correctly implement the dark mode classes in the front-end of a codebase that spanned hundreds of files and thousands of lines. I divided up the most important front-end routes between the team and set deadlines for their implementation.

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-full" src="/info/works/dark-mode/dark-mode-3.svg" />
</div>

Once the most essential pages were completed, work was divided up on all other pages of the website. This organization led my team to ship an MVP (minimum viable product) version of the dark mode within the deadline!

<div class="flex justify-center w-full">
<img loading="lazy"  class="w-full" src="/info/works/dark-mode/dark-mode-1.svg" />
</div>

<h3 style="color:#3C5CDE;"> Takeaways </h3>

There are a lot more challenges and details that went into implementing dark mode, such as the effects of using _twin.macro_ on website performance and how they were mitigated. However, that would make a really long, really boring document. If you're interested in learning the nitty gritties, send me a message and we can discuss more!

<div style="width: 100%; padding-top: 8px;" class="flex justify-center">
<img loading="lazy" class="w-full" src="/info/works/dark-mode/dark-mode-2.svg" />
</div>

This was one of the projects I was most proud of as a software engineer and it was also the first time I was leading a team on a something I had taken the inititative on. I learned invaluable management skills and the result was sweet, because it was highly visible on the live website!

<h5 class="flex justify-center"> Thank you for reading! </h5>
