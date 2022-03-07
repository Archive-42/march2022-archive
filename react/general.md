# General

## Interview Formats

Interviews are a multi-stage process and each stage can consist of vastly different formats.

### Various formats[​](https://techinterviewhandbook.org/interview-formats/#various-formats) <a href="#various-formats" id="various-formats"></a>

#### Quiz[​](https://techinterviewhandbook.org/interview-formats/#quiz) <a href="#quiz" id="quiz"></a>

Quizzes are meant to be a first-pass filter as a quick and dirty way of weeding out extremely weak (or even non-technical) candidates. They are structured questions and have clear-cut answers which makes them possible to be administered by recruiters/non-technical folks or automated graders. They are typically done early in the process.

Examples:

- What is 4 & 5 (in binary)? Answer: 4
- What is the time complexity of bubble sort? Answer: O(n2)

#### Online coding assessment[​](https://techinterviewhandbook.org/interview-formats/#online-coding-assessment) <a href="#online-coding-assessment" id="online-coding-assessment"></a>

Like quizzes, online coding assessments are usually given early in the process. An algorithm problem is given with well-formed input and output and candidates are expected to write code in an online coding interface to solve the problem. [Hackerrank](https://www.hackerrank.com) is a very common platform for conducting online coding assessments. LeetCode would be a good way to practice for the problem solving aspects of online coding assessments. However, in Hackerrank you are typically expected to write code to read from stdin and also print to stdout, which can trip candidates up if they aren't familiar with the APIs.

#### Take home assignment[​](https://techinterviewhandbook.org/interview-formats/#take-home-assignment) <a href="#take-home-assignment" id="take-home-assignment"></a>

There has been numerous debates on whether asking algorithm questions are a good way of assessing individual abilities as they aren't exactly the most relevant skills needed on a day-to-day basis at a job. Take home assignment is a format designed to address the shortcomings of the algorithm interview by getting candidates to work on larger projects which allow them to demonstrate software design skills.

However, this interview format takes up more time from both the candidates and the company and hence it is not as commonly seen in large companies where they have a high volume of candidates. This format is more common among startups and small companies.

Examples

- Build a flights listing app
- Build a kanban app
- Build a snake game

#### Phone interview[​](https://techinterviewhandbook.org/interview-formats/#phone-interview) <a href="#phone-interview" id="phone-interview"></a>

Phone interviews are the most common format and every candidate will face this at least once while interviewing. You will be asked to speak with an interviewer either over a phone call or VoIP (BlueJeans/Skype/Google Hangout). A question will be given to you and you will work on that question using an online collaborative editor (CoderPad/CodePen/Google Docs).

You are usually not allowed to execute the code even if the editor supports execution. So don't rely on that for verifying the correctness of your solution. Formats would differ slightly depending on the roles you are applying to. Many companies like to use [CoderPad](https://coderpad.io) for collaborative code editing. CoderPad supports running of the program, so it is possible that you will be asked to fix your code such that it can be run. For front end interviews, many companies like to use [CodePen](https://codepen.io), and it will be worth your time to familiarize yourself with the user interfaces of such web-based coding environments.

#### Onsite[​](https://techinterviewhandbook.org/interview-formats/#onsite) <a href="#onsite" id="onsite"></a>

If you have made it to this stage, congratulations! This is usually the final stage before an offer decision. Candidates who made it to the onsite stage will be required to have an in-person interview at the office. If you are an overseas candidate, companies might even fly you in and pay for your accommodations!

The onsite stage usually consists of multiple rounds (coding, system design, behavioral) and is expected to last for a few hours. Since you are onsite, it is possible that you will be asked to do a whiteboard exercise with an interviewer, usually either solving an algorithm question or a system design question. It is also possible that you have to bring your own laptop and work on a project/solve a coding problem on the spot.

For onsite interviews at smaller (non-public) companies, most will allow (and prefer) that you use your own laptop. Hence it is important that you prepare your development environment in advance.

If the company provides lunch, you might also have a lunch session with an employee where you can find out more about the company culture.

:::INFO

With COVID around, many companies are doing remote interviews even for the onsite rounds, so the instructions will differ.

:::

### Formats of famous companies[​](https://techinterviewhandbook.org/interview-formats/#formats-of-famous-companies) <a href="#formats-of-famous-companies" id="formats-of-famous-companies"></a>

#### Airbnb[​](https://techinterviewhandbook.org/interview-formats/#airbnb) <a href="#airbnb" id="airbnb"></a>

- Recruiter phone screen
- Technical phone interview:
  - 1 or 2 x Algorithm/front end on CoderPad/CodePen
- Onsite (General):
  - 2 x Algorithm coding on CoderPad
  - 1 x System design/architecture
  - 1 x Past experience/project
  - 2 x Cross functional
- Onsite (Front End):
  - 2 x Front end coding on CodePen. Use any framework/library
  - 1 x General coding on your own laptop
  - 1 x Past experience/project
  - 2 x Cross functional
- Tips:
  - All sessions involve coding on your own laptop. Prepare your development environment in advance
  - You are allowed to look up APIs if you need to
  - They seem to place high emphasis on compilable, runnable code in all their coding rounds
  - Cross functional interviews will involve getting Airbnb employees from any discipline to speak with you. These interviews are mostly non-technical but are extremely important to Airbnb because they place a high emphasis on cultural fit. Do look up the Airbnb section of the behavioral questions to know what sort of questions to expect

#### Asana[​](https://techinterviewhandbook.org/interview-formats/#asana) <a href="#asana" id="asana"></a>

- Recruiter phone screen
- Technical phone interview
- Onsite (Product Engineer):
  - 3 x Algorithm and system design on whiteboard within the same session
  - 1 x Algorithm on laptop and system design. This session involves writing code on your own laptop to solve 3 well-defined algorithm problems in around 45 minutes after which an engineer will come in and review the code with you. You are not supposed to run the code while working on the problem
- Tips:
  - No front end questions were asked
  - Asana places high emphasis on System Design and makes heavy use of the whiteboard. You do not necessarily have to write code for the algorithm question of the first three interviews
  - All 4 sessions involve algorithms and system design. One of the sessions will be conducted by an Engineering Manager
  - The last session will involve coding on your own laptop. Prepare your development environment in advance
  - Regardless of Product Engineer or Engineering Generalist position, their interview format and questions are similar

#### Dropbox[​](https://techinterviewhandbook.org/interview-formats/#dropbox) <a href="#dropbox" id="dropbox"></a>

- Recruiter phone screen
- Technical phone interviews:
  - 2 x Algorithm/front end on CoderPad/CodePen
- Onsite (Front End):
  - 2 x Front end on CodePen. Only Vanilla JS or jQuery allowed
  - 1 x General coding on CoderPad
  - 1 x All around. Meet with an Engineering Manager and discussing past experiences and working style
- Tips:
  - You can code on your own laptop and look up APIs
  - Dropbox recruiters are very nice and will give you helpful information on what kind of questions to expect for the upcoming sessions
  - One of the front end sessions involve coding up a pixel-perfect version of a real page on the Dropbox website. You'll be given a spec of the desired page and you'll be asked to create a working version during the interview

#### Facebook[​](https://techinterviewhandbook.org/interview-formats/#facebook) <a href="#facebook" id="facebook"></a>

- Recruiter phone screen
- Technical phone interviews:
  - 1 or 2 x Algorithm/front end on Skype/CoderPad
- Onsite:
  - 2 x Technical coding interview on whiteboard
  - 1 x Behavioral. Meet with an Engineering Manager and discussing past experiences and working style
  - 1 x Design/architecture on whiteboard
- Onsite (University Grad):
  - 2 x Technical coding interview on whiteboard
  - 1 x Behavioral. Meet with an Engineering Manager and discussing past experiences and working style
- Tips:
  - You are only allowed to use the whiteboard (or wall). No laptops involved
  - For the behavioral round, you may be asked a technical question at the end of it. Front end candidates will be given a small HTML/CSS problem nearing the end of the session
  - For the coding rounds, you may be asked one or more questions depending on how fast you progress through the question

#### Google[​](https://techinterviewhandbook.org/interview-formats/#google) <a href="#google" id="google"></a>

- Recruiter phone screen
- Technical phone interview:
  - 1 or 2 x algorithm on Google Doc
- Onsite:
  - 1 or 2 x Front end on whiteboard. May be required to use Vanilla JS (or at the most, jQuery) depending on the question. (Front End only)
  - 2 to 4 x Algorithm on whiteboard
  - 1 x General Cognitive Ability, Leadership and "Googleyness".
- Team matching
  - Speak with managers from different teams who are interested in your profile
- Tips:
  - In rare cases, candidates may even be allowed to skip the phone interview round and advanced to onsite directly
  - For non-fresh grads, you only receive an offer if you are successfully matched with a team

#### Lyft[​](https://techinterviewhandbook.org/interview-formats/#lyft) <a href="#lyft" id="lyft"></a>

- Recruiter phone screen
- Technical phone interview:
  - 1 x Algorithm/Front end over JSFiddle
- Onsite (Front End):
  - 4 x Front end on Coderpad/your own laptop. Use any language/framework
  - 1 x Behavioral. Meet with an Engineering Manager and go through candidate's resume
- Tips:
  - Can use whiteboard and/or laptop
  - For front end coding, I opted to use React and had to set up the projects on the spot using `create-react-app`

#### Palantir[​](https://techinterviewhandbook.org/interview-formats/#palantir) <a href="#palantir" id="palantir"></a>

- Recruiter phone screen
- Technical phone interview:
  - 1 x Algorithm over HackerRank CodePair and Skype
- Onsite (General):
  - 2 x Algorithm on whiteboard
  - 1 x Decomposition (system design) on whiteboard
- Onsite (Front End):
  - 1 x Front end on your own laptop. This session lasts about 1.5 hours. Use any library/framework
  - 1 x Decomposition (system design) on whiteboard
- Tips:
  - I opted to use React and had to set up projects on the spot using `create-react-app`
  - You may be asked to meet with Engineering Managers after the technical sessions and it's not necessarily a good/bad thing

#### WhatsApp[​](https://techinterviewhandbook.org/interview-formats/#whatsapp) <a href="#whatsapp" id="whatsapp"></a>

- Recruiter phone screen
- Technical phone interview:
  - 2 x Algorithm over CoderPad
- Onsite (Web Client Developer):
  - 4 x Algorithm on whiteboard
- Tips:
  - No front end questions were asked
  - 1 of the interviewers is an Engineering Manager
