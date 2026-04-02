+++
title = 'Bulding a text messaging app simulation'
date = 2026-04-02T14:45:00+01:00
draft = false
+++

I am studying Computer Science since I was 19 years old (without counting high school). So this is the seventh year straight. Still, I feel like I have many weak (or perhaps completely wrong) mental models to represent most of the systems I use day by day.

In this series, I will try to challenge, destroy, and rebuild one of those mental models, by **replicating** a very complex system, building the most of it from scratch. 

Let's face this right away: the probability of me to ~abandon this side project like many others before it~ fail miserably is much higher than the one of me succeeding, but I feel like this is worth trying.

## The Problem with Chat Apps

I've also been a developer for Apple platforms, particularly iOS and iPadOS, for two years now, mainly using Swift and SwiftUI. If there's one feature that still scares the hell out of me when asked, that is a chat screen/app/implementation. On paper, **a chat screen looks easy**: at the end of the day, it's just a list of messages, one could think. And it really is. But we are so accustomed to smooth chat experiences, like the ones offered by WhatsApp, Telegram, and so on, that most of us aren't able to see **the complexity under the surface** of such apps.

Those are the main points that the majority of users give for granted and not notice:
- The text messages exchanged via these apps travel on the Internet, but **you hardly see any loading screen or spinner**, even when searching for really old messages. Also, most of such messages are available even offline.
- There could be a lot of messages in a single chat, but **no interruption is perceived when scrolling** through them in both directions.
- **The list in which messages are displayed is upside down**, in the sense that it is a rare example of the most recent item being on the bottom of the list instead of the top.
    - As a corollary to this, in some apps (like WhatsApp) the bottom of the list coincides to the bottom of the screen only when there are enough messages to fill the screen itself; otherwise, the first messages of the conversation appear at the top of the screen (maintaining the ordering described previously).

If you ever tried to build a chat screen/app using SwiftUI, you could've noticed it is a pain in the ass, and there are not many resources online about this, apart from workarounds like [rotating both the list and its containers by 180º](https://www.swiftwithvincent.com/blog/building-the-inverted-scroll-of-a-messaging-app); at least, this has been my experience up until now.

## The Plan

I haven't been able to talk about this feeling to any more experienced engineer than me, and I am sure that I am getting something wrong at some point of the process, wheter it is the API, the pagination handling, the local database or whatever. So, I decided to pour some time and effort into this endeavour of replicating the experience of any commonly used chat app, both from the mobile client perspective, and from the distributed backend one.

The inspiration for this came from [Juraj Majerik](https://jurajmajerik.com/), which did a similar thing [cloning Uber](https://jurajmajerik.com/blog/start-here/), and got featured on [The Pragmatic Engineer](https://blog.pragmaticengineer.com/an-educational-side-project/) (which made me discover him and his project).

### AI Notice

I don't know if I need to point this out explicitly, but I decided not to use AI to write any code in this project. I acknowlege its huge potential in coding, and I happen to use it in my daily job, but [I don't think it will help me grounding the concepts I'm trying to learn here](https://www.anthropic.com/research/AI-assistance-coding-skills).  

***

Starting from the next post, I'll begin to reasonate about the architecture of the whole (simulated) system. Obviously, I already started thinking about this, but I have some really big gaps about how something like that could work, let alone at the scale in which those apps operate. I will for sure write and keep in the posts whatever question arises to my mind, even the apparently most stupid ones.