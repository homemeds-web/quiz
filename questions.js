const surveyConfig = {
  // title: "Welcome!",
  // subtitle: "Tell us a bit about you.",
  themeColor: "#076effff",
  defaultSheetName: "Sheet1",
  disclaimer: "[size=7.5px]This assessment is anonymous and secured. Data/response will not be shared or even stored right after your assessment results and diagnosis.[/size]",
  copyright: "© 2025 Affiliate [a href='https://www.digistore24.com/page/terms/4/en'][u]Terms[/u] & [u]Conditions[/u][/a]",
  completionHref: "https://homedoctorbook.com/book/#aff=twenty-five/",    // last-question CTA link

  fontSizes: {
    question: "1.15em",
    description: "0.95em",
    answers: "1em",
    input: "1em",
    inputLabel: "0.9em",
    comment: "0.95em",
    btnMain: "1.02em",
    btnSub: "0.6em",
    disclaimer: "10px",
    copyright: "11px"
  },
  transparentBackground: true,  // <-- set true to enable transparent card mode
};



const questions = [

  {
    media: { type: "image", src: "img/banner.jpg" },
    question: "Most Dog Parents Miss the Silent Signs of Their Pet’s Suffering; Take This 2-Minute Quiz to See If You’re One of Them.",
    description: "It only takes small unnoticed habits to make even the most caring dog parent a silent cause of their pet’s discomfort, inhibited quality and longevity of life. This quick 2-minute quiz helps you uncover if you’ve been missing the warning signs, and shows you the exact ways to fix them. Trusted by over 150,000 pet lovers, backed by expert insight, and loved for its honest results. Begin your test now and discover the truth every dog owner needs to know.",
    "mainButtonText": "Start the Quiz Now"
  },

  // ---------- INTRODUCTORY QUESTIONS (personalization keys saved) ----------
  {
    id: "q_pet_name",
    type: "input",
    question: "[color=#eb4034][size=18px][i]Question 1 of 9[/i][/size][/color]\n\nWhat is your dog's name?",
    // description: "[i]Enter the name so your results feel tailored to {answers.petName}.[/i]",
    inputs: [
      { type: "text", key: "petName", placeholder: "e.g. Max", comment: "Love that name! {answer} sounds like a real companion." }
    ]
  },
  {
    id: "q_breed",
    type: "input",
    question: "[color=#eb4034][size=18px][i]Question 2 of 9[/i][/size][/color]\n\nWhat breed is {answers.petName} (or best description)?",
    description: "[i]Examples: Labrador, Mixed-breed, Chihuahua, Rescue dog, etc.[/i]",
    inputs: [
      { type: "text", key: "petBreed", placeholder: "e.g. Labrador / Mixed / Rescue", comment: "{answer} noted! That'll help a lot. Every breed carries its own mix of instincts, sensitivities, and emotional quirks. Some hide discomfort behind loyalty while others wear every feeling on their face. It’s always deeper than it looks." }
    ]
  },
{
  id: "q_age",
  type: "choice",
  question: "[color=#eb4034][size=18px][i]Question 3 of 9[/i][/size][/color]\n\nHow old is {answers.petName}?",
  options: [
    {
      text: "Puppy (0-6 months)",
      value: "puppy",
      key: "petAge",
      comment: "{answers.petName} is at the stage where every ignored bad habit becomes a lifelong problem. What you overlook now, you’ll pay for later in chaos and regret."
    },
    {
      text: "Young (6-24 months)",
      value: "young",
      key: "petAge",
      comment: "{answers.petName} is still impressionable, every lazy shortcut you take now shapes their personality. Keep brushing things off and you’ll raise confusion, not loyalty."
    },
    {
      text: "Adult (2-7 years)",
      value: "adult",
      key: "petAge",
      comment: "{answers.petName} is in their prime, ignoring subtle behavioral or health shifts now means you’re slowly building tomorrow’s crisis, one small negligence at a time."
    },
    {
      text: "Senior (7+ years)",
      value: "senior",
      key: "petAge",
      comment: "{answers.petName} doesn’t bounce back anymore, every skipped check or dismissed symptom chips away at comfort and dignity you can’t give back later."
    }
  ]
},
{
  id: "q_home_type",
  type: "choice",
  question: "[color=#eb4034][size=18px][i]Question 4 of 9[/i][/size][/color]\n\nWhat best describes your living situation?",
  description: "This helps reveal how much control or chaos surrounds {answers.petName} daily life, and how that environment silently shapes every bad habit you’ve been ignoring.",
  options: [
    {
      "text": "Apartment / No yard",
      "value": "apartment",
      "key": "homeType",
      "comment": "Cramped spaces force {answers.petName} to hold back discomfort until it explodes into frustration, mess, or quiet suffering you might pretend not to see."
    },
    {
      "text": "House with yard",
      "value": "yard",
      "key": "homeType",
      "comment": "Even freedom can rot into neglect, space means nothing if {answers.petName} is left alone to build unhealthy habits while you assume they’re fine."
    },
    {
      "text": "Shared housing / Rentals",
      "value": "shared",
      "key": "homeType",
      "comment": "In shared spaces, every slip-up from {answers.petName} turns into shame and blame, a reminder that your peace depends on how well you’ve prepared them to behave."
    }
  ]
},

  // ---------- PIVOTING QUESTION (decider) ----------
  {
    id: "q_main_concern",
    type: "choice",
    question: "[color=#eb4034][size=18px][i]Question 5 of 9[/i][/size][/color]\n\nWhich of these problems concerns you most about {answers.petName} right now?",
    description: "Ignoring the real problem is how most dog parents slowly fail their pets without realizing it. Your answer here reveals what part of {answers.petName}’s life might already be slipping, and how deep this issue could quietly be running beneath the surface. You can pick an option even if it has only one of the listed problems that applies to {answers.petName}.",
    options: [
      {
        text: "Indoor pee / poop accidents, no matter how many times you’ve tried to fix it",
        value: "accidents",
        key: "pivotTopic",
        buttontext: "Continue",
        nestedQuestions: [
          // Potty branch - purpose-driven questions
          {
            id: "p_acc_freq",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 6 of 9[/i][/size][/color]\n\nHow often does {answers.petName} pee or poop inside your home (not outside)?",
            options: [
              { text: "Daily (every day)", value: "daily", key: "accFreq", comment: "Daily indoor pee/poop is a running problem that slowly ruins your home; letting it continue is neglecting both hygiene and your responsibility as a protector." },
              { text: "Several times a week", value: "several", key: "accFreq", comment: "Repeated weekly accidents mean the habit is forming and you are allowing your living space to be damaged while hoping it will stop on its own." },
              { text: "Occasionally (once in a while)", value: "occasionally", key: "accFreq", comment: "Occasional accidents often become frequent when left unaddressed; tolerating them today invites bigger problems tomorrow." },
              // { text: "Never / Rarely", value: "rarely", key: "accFreq", comment: "If accidents are rare you're fortunate, but ignoring early warning signs risks turning rare into regular if routines slip." }
            ]
          },
          {
            id: "p_acc_time",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 7 of 9[/i][/size][/color]\n\nWhen do most of the indoor accidents happen for {answers.petName}?",
            options: [
              { text: "At night / while sleeping", value: "night", key: "accTime", comment: "Nighttime accidents indicate missed signals and routine failures; failing to act now will normalize poor night habits." },
              { text: "When left alone during the day", value: "alone", key: "accTime", comment: "Accidents when alone point to separation, schedule, or training gaps and show that the environment is failing them and you are tolerating it." },
              { text: "Immediately after confinement (crate/pen)", value: "aftercrate", key: "accTime", comment: "Accidents after confinement reveal inconsistent routines or misuse of containment; continuing this will teach {answers.petName} to accept indoor elimination." },
              { text: "Random / no pattern", value: "random", key: "accTime", comment: "Random accidents without pattern are often ignored until they become the norm; that negligence costs money, health, and local goodwill." }
            ]
          },
          {
            id: "p_acc_cleanup",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 8 of 9[/i][/size][/color]\n\nWhen accidents happen, how do you normally respond?",
            options: [
              { text: "Clean and move on", value: "clean_move", key: "accResponse", comment: "Cleaning and moving on without a plan teaches {answers.petName} nothing; that complacency lets bad habits root and punishes your future peace." },
              { text: "Punish or scold after the fact", value: "scold", key: "accResponse", comment: "Scolding after the fact confuses dogs and increases anxiety; that punishment-driven approach often makes accidents worse and damages trust." },
              { text: "Use pee pads or let it slide", value: "pads", key: "accResponse", comment: "Relying on pads or tolerating messes trains acceptance of indoor elimination and quietly surrenders your home’s hygiene to the problem." },
              { text: "I try schedules + consistency", value: "schedules", key: "accResponse", comment: "Trying schedules is the right instinct; if you fail to be consistent the problem persists, so half-effort equals slow burnout and wasted money." }
            ]
          },
          {
            id: "p_acc_try",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 9 of 9[/i][/size][/color]\n\nHave you followed a proven day-by-day potty plan before (not just random tips)?",
            options: [
              { text: "Yes, a structured plan", value: "yes_plan", key: "accTried", comment: "Using a structured plan shows effort; failing to follow it strictly, however, will still allow accidents to persist and your responsibility to be questioned." },
              { text: "No, I tried random tips or YouTube", value: "no_tips", key: "accTried", comment: "Random tips without consistent structure confuse both you and {answers.petName}; that inconsistency is the main reason accidents keep happening and must stop." },
              { text: "I hired a trainer before", value: "trainer", key: "accTried", comment: "Hiring help is responsible, but if the training wasn't followed at home you will still be the one living with the failures and the costs." },
              { text: "I haven't tried anything consistent", value: "none", key: "accTried", comment: "Not trying a consistent approach is choosing the slow path to habit formation; that inaction makes the situation worse and places blame on your inattention." }
            ]
          },
          {
            "id": "optin_pottytraining",
            "type": "opt-in",
            "question": "",
            "description": "⚠️ Your responses suggest disrupted habit cycles and environmental stress that may be causing {answers.petName}’s repeated potty accidents.\n\nWe’ve assembled your [b]Dog-Parent Behaviour & Potty-Habits Report[/b], including your behavioural consistency stage and a structured plan to retrain {answers.petName}’s routines with less frustration.\n\nEnter your name and email below to see and receive your complete report in your inbox.",
            "inputs": [
              { "type": "text", "key": "fullName", "placeholder": "Full name", "comment": "Thanks {answer}!" },
              { "type": "email", "key": "emailAddr", "placeholder": "you@example.com", "comment": "We’ll email {answer} your full report." }
            ],
            "sheetName": "PottyTrainingLeads",
            "waitingbutton": "Saving..."
          },
          // results page for the potty branch
          {
            id: "result_potty_training",
            type: "no-answer",
            question: "Your Dog-Parent Behaviour & Potty-Habits Report",
            description: "So… based on everything you shared earlier, especially that part about {answers.petName} having [b]indoor pee/poop accidents no matter how many times you’ve tried to fix it[/b], you’re sitting in a very specific stage of the potty-training journey. And honestly? You’re not alone, lots of loving dog-parents quietly deal with this exact pattern with the exact same breed.\n\nLet’s break down what your answers actually reveal.\n\n---\n\n[size=18px][b]🚩 What’s Really Happening Here[/b][/size]\nRight now, the pattern you described suggests {answers.petName} isn’t struggling out of stubbornness… but from a training gap that was never fully sealed.\nIt often comes from things like:\n\n- mixed or unclear potty signals\n- inconsistent reinforcement loops\n- indoor environments with past “accident scent anchors”\n- timing windows being off by just a little\n- or simply not knowing the exact sequence that makes potty-training stick permanently\n\nNone of this is your fault; most dog-parents are never taught the actual behaviour sequence dogs need.\n\nWhat your answers point to is a familiar stage:\n[b]your dog partially understands what to do… but the final behavioural lock-in never fully clicked.[/b]\nThat’s why you’re still seeing random accidents even after trying different methods.\n\n---\n\n[size=18px][b]📉 The Level You’re Currently At[/b][/size]\nYour dog is somewhere in the “high confusion / low reliability” phase.\nThis stage is where:\n\n- {answers.petName} sometimes does the right thing\n- but can’t repeat it consistently\n- and environmental triggers easily override what they’ve learned\n- meaning you keep getting unpredictable indoor accidents\n\nThis stage feels incredibly frustrating because the dog looks like they “should know better”… but the foundation of the behaviour isn’t actually complete.\n\n---\n\n[size=18px][b]⚠️ What Happens If This Stage Continues[/b][/size]\nIf nothing changes, this level usually progresses into the “habit-solidification stage” where:\n\n- indoor spots become mentally marked as “approved”\n- the dog stops seeing accidents as mistakes\n- the cleanup scent never truly disappears, so the cycle keeps repeating\n- and the dog becomes harder to retrain because an old habit has now become the *default*\n\nThis is the point where dog-parents feel defeated, and the dog gets misunderstood as being disobedient when really the training framework itself was never fully connected.\n\n---\n\n[size=18px][b]🧭 So… What Does a Real Fix Actually Need to Look Like?[/b][/size]\nIf someone in your exact situation went looking for a solution, they would need something that:\n\n- ✔️ Provides a [b]step-by-step potty sequence[/b]\n  Why: Dogs learn behaviours in predictable chains, missing one step breaks the whole routine.\n\n- ✔️ Removes indoor scent anchors properly\n  Why: If the old “accident signal” stays, the dog’s brain reads the room as a valid bathroom.\n\n- ✔️ Uses reinforcement timing that matches dog psychology\n  Why: Rewards at the wrong second… literally teach the *wrong* behaviour.\n\n- ✔️ Works for all dog ages, including older dogs\n  Why: Many online tips only work for puppies, not dogs who already built habits.\n\n- ✔️ Can reset existing bad potty patterns\n  Why: You’re not starting from scratch, you’re correcting something your dog already believes is normal.\n\n- ✔️ Doesn’t need harsh discipline, gadgets or weird gimmicks\n  Why: Dogs respond best to clarity, not punishment or confusion.\n\nThese are the criteria any real solution needs to meet.\nAnd honestly? Most “potty-training hacks” online fail almost every single one of these.\n\n---\n\n[size=18px][b]⭐ The Solution That Actually Meets All the Above Criteria[/b][/size]\nAfter breaking down what your quiz answers reveal and what stage you’re in, the only kind of fix that makes sense for your situation is a [b]structured, behaviour-based potty-training system[/b], something that rebuilds the correct habit from the ground up.\n\nAnd that’s exactly why the [b]Dog Potty Training in 7 Days[/b] program stands out. It perfectly matches you and {answers.petName}'s situation, and the criteria above because:\n\n- it teaches the exact behavioural sequence dogs use\n- it shows you how to erase old accident scent triggers properly\n- it uses timing-based reinforcement methods backed by canine psychology\n- it’s built for puppies and older dogs\n- it resets old habits instead of pretending they don’t exist\n- it keeps everything simple, calm and humane, no punishment, no gimmicks\n\nWe're recommending it because it saves you from digging through hundreds of conflicting tips, YouTube hacks, and outdated training advice that don’t work for dogs {answers.petName}’s age, breed or behaviour pattern.\n\nThis actually uses the same framework professional trainers use; just simplified so any dog-parent can apply it in minutes a day.\n\nAnd honestly? Considering where {answers.petName} is right now (that confusing stage where they “kind of get it but not really”), this is the exact type of help that finally creates consistency and removes those lingering indoor accidents permanently.\n\n---\n\n[size=18px][b]🎯 Why This Recommendation Makes Sense for You[/b][/size]\nBecause of the specific problem you selected earlier, about {answers.petName} having [b]indoor pee/poop accidents even after trying to fix it multiple times[/b]; the program is a perfect fit.\nYou don’t need random hacks…\nYou need [b]clarity, timing, and a reset of {answers.petName}’s potty blueprint[/b].\n\nThis is the fastest and simplest path to:\n\n- eliminating indoor accidents\n- teaching {answers.petName} one clear routine\n- replacing old potty habits with the correct one\n- finally getting peace in your home again\n\nAnd now that all the hard diagnosis work is done for you, you’ve basically skipped months of trial-and-error research most dog-parents get stuck in.\n\n\n[b]We've only just told you the tail of the 7 Day dog potty training guide's fish, so click to continue below to learn more on the next page 👇[/b]"
          },
          {
            type: "choice",
            media: { type: "image", src: "img/potty.jpg" },
            question: "The 7 Day Dog Potty Training Program: Quick Overview",
            description: "[b]This is the program we mentioned on your report for {answers.petName}.[/b]\nIt’s a simple, step-by-step system that guides dog-parents to teach their dog where and when to go to the toilet. It focuses on behavior sequences, timing, and removing the things that make indoor accidents repeat.\n\n----\n\n[b][size=18px]Why this works 🧠✨[/size][/b]\n- It trains the dog’s brain with a clear sequence of cues and rewards, so the dog learns the exact steps to go outside instead of inside.\n- It guides you to remove the leftover smell and daily triggers in the home that keep telling the dog “it’s okay to go here.” In a the professional way.\n- It fits into busy schedules, so owners who work can still follow it consistently.\n\n----\n\n[b][size=18px]Key features 📘🔍[/size][/b]\n- Day-by-day blueprint for 7 days; clear steps for each day.\n- Busy-owner schedules; routines that fit 9–5 life.\n- Signal recognition guide; how to read your dog’s “I need to go” signs.\n- Cleanup and odor removal tips; stop the scent from inviting repeat accidents.\n- Problem-solving section; fixes for nighttime, marking, and relapses.\n- Lifetime access as digital download; start right away on any device.\n- 60-day money-back guarantee (no hassle).\n\n----\n\n[b][size=18px]Benefits for you and {answers.petName} 🐶💛[/size][/b]\n- {answers.petName} will now have fewer or no indoor accidents in days, not months.\n- Less cleaning, less stress, and fewer arguments about the house smell.\n- More confidence in {answers.petName} and in yourself as the owner.\n- Better nights, less waking up to take the dog out.\n- Save money by avoiding repeated carpet/floor repairs and cleaners.\n\n----\n\n[b][size=18px]Our findings from the internet 🌐🔎[/size][/b]\n- Trusted by 12,000+ dog parents who used the system in real homes. We got this from review sites.\n- Most users report clear improvement within the first week. This is from the program's official website.\n- Backed by simple behavior science; the steps match how dogs naturally learn. Says their official website.\n\n> [i]These are summary numbers to show how widely used and effective this approach is to solving potty problem in dogs. The most satisfying so far when compared to other programs in this space[/i]\n\n----\n\n[b][size=18px]Common objections; quickly answered ❗💬[/size][/b]\n- [b]“I don’t have time.”;[/b] The plan is built for busy schedules. Daily tasks take minutes, not hours.\n- [b]“My dog is older. . . will it still work?”;[/b] Yes. The method resets habits; it works for puppies and older dogs.\n- [b]“I’ve tried everything before.”;[/b] If you tried random tips, you saw mixed results. This is a consistent, repeatable system - that’s the difference.\n- [b]“Is it punishment-based?”[/b] No. It uses clear cues and reward timing, not harsh punishment.\n- [b]“What if it fails?”[/b] There’s a 60-day money-back guarantee, so you can try it risk-free.\n\n----\n\n[b][size=18px]How easy it is to use (so simple) 📱➡️🐕[/size][/b]\n1. It's digital, so just purchase on to any phone or laptop.\n2. Then start with the Day 1 plan (takes 5–10 minutes).\n3. Follow the short daily routine and the timing cues.\n4. Use it's professional cleanup guide when accidents happen so they don’t repeat.\n5. Keep consistent for 7 days and watch the habit lock-in. You could still continue.\n\n> [i]It is said on their website that most owners start seeing real change within the first week. It’s designed to be low-effort and high-effect.[/i]\n\n----\n\n[b][size=18px]What makes it different / unique ⭐🐾[/size][/b]\n- It teaches the [b]exact sequence[/b] dogs use so you don’t guess.\n- It includes real-life schedules for busy people, not just theory.\n- It focuses on removing the environment cues that silently in the dog world cause repeat accidents.\n- It’s practical, not preachy, so there are no weird tools, and no harsh discipline, and no super long training sessions.\n\n----\n\n[b][size=18px]Ready to get the guide and fix this for {answers.petName}? 🚀🐶[/size][/b]\nIf you think good about everything we found in your quiz, click the button below to go to the program's official product page to check it out. 👇",
            options: [
              { text: "⚡tap here to activate button first 👈", href: "http://www.betterdailyguide.site/ds24/potty-training-in-7-days#aff=twenty-five", target: "_blank", buttontext: "Check It Out from the Official Website", }
            ],
          }
        ]
      },

      {
        text: "Smelly fart, soft stool, used to be playful - now seems tired, lazy, or uninterested in walks.",
        value: "gut",
        key: "pivotTopic",
        buttontext: "Continue",
        nestedQuestions: [
          // Pawbiotix branch - gut health questions
          {
            id: "g_symptoms",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 6 of 9[/i][/size][/color]\n\nWhich of these best describes {answers.petName}'s digestive symptoms?",
            options: [
              { text: "Frequent loose stools / diarrhea", value: "diarrhea", key: "gutSymptom", comment: "Frequent loose stools rob {answers.petName} of nutrients and energy, and ignoring it means letting chronic illness take hold while you hope it clears up on its own." },
              { text: "Gas, smelly farts", value: "gas", key: "gutSymptom", comment: "Chronic gas signals a microbiome problem that quietly reduces quality of life; tolerating the smell and embarrassment is refusing to protect their health." },
              { text: "Poor appetite / picky eating", value: "picky", key: "gutSymptom", comment: "A fading appetite is an early sign of imbalance; ignoring it lets malnutrition creep in and makes recovery harder later on." },
              { text: "Itchy skin or recurrent infections", value: "itchy", key: "gutSymptom", comment: "Skin issues often start in the gut; tolerating visible discomfort shows a failure to address root causes and exposes {answers.petName} to ongoing misery." }
            ]
          },
          {
            id: "g_onset",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 7 of 9[/i][/size][/color]\n\nHow long have these digestive signs been present for {answers.petName}?",
            options: [
              { text: "Less than 2 weeks", value: "short", key: "gutDuration", comment: "Short symptoms can still progress quickly if ignored; hope without action is the cheapest route to long-term problems." },
              { text: "2–8 weeks", value: "weeks", key: "gutDuration", comment: "A few weeks of symptoms already signals an imbalance that is not self-correcting; letting it linger punishes {answers.petName} with needless discomfort." },
              { text: "Several months", value: "months", key: "gutDuration", comment: "Months of issues is chronic at this point; delaying a targeted approach has cost you and your pet time, money, and health." },
              { text: "Ongoing for years", value: "years", key: "gutDuration", comment: "Longstanding digestive problems suggest you have accepted poor health as normal, and that acceptance will shorten quality and possibly length of life." }
            ]
          },
          {
            id: "g_food",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 8 of 9[/i][/size][/color]\n\nWhat best describes {answers.petName}'s regular diet?",
            options: [
              { text: "Premium commercial kibble", value: "premium", key: "dietType", comment: "Premium kibble can help but doesn't always fix microbiome imbalance; assuming food alone will cure symptoms is naive and risks ongoing decline." },
              { text: "Cheap / low-quality kibble", value: "cheap", key: "dietType", comment: "Low-quality food often worsens gut issues; continuing to feed it while hoping for results is neglectful of long-term health." },
              { text: "Raw / BARF / home-cooked", value: "raw", key: "dietType", comment: "Home-cooked or raw diets can be great but still need microbiome support; assuming they are a cure-all without monitoring invites preventable illness." },
              { text: "Mix of types / inconsistent", value: "mixed", key: "dietType", comment: "Inconsistent feeding patterns destabilize digestion; tolerating that chaos blames the dog for symptoms you allowed to develop." }
            ]
          },
          {
            id: "g_vet",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 9 of 9[/i][/size][/color]\n\nHave you spoken to your vet about these digestive signs?",
            options: [
              { text: "Yes, they gave tests/treatment", value: "vet_yes", key: "vetSeen", comment: "Seeing a vet is responsible; failing to act on their recommendations or stopping treatments early leaves your dog at risk." },
              { text: "Yes, vet said nothing serious", value: "vet_nothing", key: "vetSeen", comment: "If your vet minimized it and you dismissed your concern, you still carry responsibility for monitoring and addressing the issue." },
              { text: "No, I haven't asked a vet", value: "vet_no", key: "vetSeen", comment: "Not seeking vet advice means choosing ignorance over action; that choice often converts manageable issues into serious problems." },
              { text: "I tried supplements before", value: "supps", key: "vetSeen", comment: "Random supplements without a plan can waste money and time; that scattershot approach keeps the underlying problem active." }
            ]
          },
          {
            "id": "optin_pawbiotix",
            "type": "opt-in",
            "question": "",
            "description": "⚠️ Based on your answers, we’ve detected internal imbalance patterns that could be silently draining Max’s energy and weakening their immunity.\n\nWe’ve just compiled your [b]Dog-Parent Gut Health Report[/b], including your risk score and a tailored next-step treatment plan for restoring {answers.petName}’s vitality.\n\nEnter your name and email below to view and receive your full report in your inbox.",
            "inputs": [
              { "type": "text", "key": "fullName", "placeholder": "Full name", "comment": "Thanks {answer}!" },
              { "type": "email", "key": "emailAddr", "placeholder": "you@example.com", "comment": "We’ll email {answer} your full report." }
            ],
            "sheetName": "PawbiotixLeads",
            "waitingbutton": "Generating Report..."
          },
          // {
          //   "id": "result_pawbiotix",
          //   "type": "no-answer",
          //   "question": "Results: Dog-Parent Gut Health Report Summary for You and {answers.petName}",
          //   "description": "[b]You told us:[/b] smelly farts, soft stools, and that {answers.petName} used to be playful but now seems tired, slow, or uninterested in walks. That combination is a clear signal pointing to the dog’s digestive system struggling to do its job. It’s not drama; it’s biology. Let’s walk through what that means, what stage you’re likely at, what can happen if nothing changes, and what to look for in a real solution.[br]\n\n[b]What this likely means right now[/b]\n- Your dog’s gut bacteria balance is probably off. When digestion is unstable you get loose stools, gas, and low energy because nutrients aren’t being absorbed properly.[br]\n- The behavior change; less play, less interest in walks is often an early symptom of low energy from poor nutrient uptake and chronic low-grade inflammation.[br]\n- Smelly gas and inconsistent stools are the body’s way of telling you the microbiome needs support, not punishments or guesswork.[br]\n\n[b]Possible root causes (short and specific)[/b]\n- Diet mismatch or low-quality kibble that doesn’t support a healthy microbiome.\n- Repeated antibiotic or medication exposure that disrupted beneficial gut bacteria.\n- Food intolerances or sudden diet switches that upset digestion.\n- Lack of prebiotic / probiotic support so the good bacteria can’t reestablish themselves.[br]\n\n[b]The stage you’re probably in (based on your answers)[/b]\nGiven soft stools + noticeable drop in energy, you’re most likely in an early-to-moderate imbalance phase: symptoms are real and recurring, but not yet catastrophic. It’s the perfect moment to act, because small, targeted changes produce visible turnaround here. Waiting lets the imbalance become chronic, harder to fix, and more expensive.[br]\n\n[b]What happens if you ignore it (the harsh part)[/b]\n- The short-term cost is ongoing discomfort for {answers.petName} and more vet visits and tests that could have been reduced with early action.\n- Letting gut imbalance persist often leads to chronic skin problems, lower immunity, and joint or mobility issues later because inflammation spreads.\n- Long-term neglect can shorten quality of life and escalate treatment complexity, the very thing good owners worry about most.[br]\n\n[b]What you should look for in a real solution (exact form + must-have criteria)[/b]\nWhen you search for a fix, you should be looking for a [b]targeted, daily probiotic formula for dogs[/b], not a vague “digestive supplement.” The exact must-have qualities are:\n- Multiple clinically useful probiotic strains; because a single strain rarely reshapes the microbiome; multiple strains create balance across the gut.\n- High CFU count in a stable, dog-safe delivery; you want enough live cultures to make an impact and a formula that survives stomach acid.\n- Prebiotic support (fiber like inulin or chicory); prebiotics feed the good bacteria, or the probiotics won’t stick around long-term.\n- Digestive-support ingredients (L-Glutamine, enzymes or similar); these help repair the gut lining and improve nutrient absorption.\n- Natural anti-inflammatory components (for example turmeric/PEA) where appropriate; to reduce gut inflammation without harsh drugs.\n- Pet-friendly flavor and easy daily dosing; it must be something you can reliably give every day, or it won’t work.\n- Transparent ingredient list and clinical references; you should be able to check what’s inside and why those ingredients matter.\n- Money-back guarantee or risk-reduction policy; outcomes vary and you deserve protection if it doesn’t help.[br]\n\n[b]Why most quick fixes fail[/b]\n- Single-ingredient pills or random “digestive treats” rarely change the microbiome in a meaningful way; they mask symptoms for a while and then symptoms come back.\n- Diet tweaks alone can help, but if the microbiome has been damaged by antibiotics or years of poor food, it usually needs a targeted daily support plan.\n- Throwing money at random supplements without a clear ingredient strategy wastes time and keeps your dog stuck in the same loop.[br]\n\n[b]A practical, no-nonsense recommendation[/b]\nYou don’t have to research every probiotic on the market. Based on the criteria above, a daily, multi-strain dog probiotic with prebiotics and gut-repair nutrients is the right form of solution. It supports digestion, calms gas, restores energy, and reduces the slow inflammation that makes dogs feel “old” before time. One product that matches these specifics is [b]Pawbiotix[/b], a targeted probiotic formula for dogs that contains multiple beneficial strains, prebiotic fibers (like chicory root inulin), supporting nutrients (L-Glutamine, turmeric), and a palatable flavor profile so dogs take it consistently.[br]\n\n[b]Why Pawbiotix is a sensible choice (practical reasons, no hype)[/b]\n- It bundles multiple bacterial strains and prebiotic fibers, which is exactly the combo you need to repopulate healthy gut flora.\n- It includes gut-repair nutrients that help restore digestion so {answers.petName} can actually use the food they eat instead of wasting energy.\n- The product lists transparent ingredients and references to supporting science so you can verify what’s inside.\n- It’s offered in daily doses that are easy to give, making long-term compliance realistic, and compliance is where results happen.\n- A market-style guarantee reduces your risk so you can try it without committing to endless vet invoices.[br]\n\n[b]What a simple action plan looks like (3 steps you can start today)[/b]\n1. Stabilize feeding; pick a consistent, digestible diet and stick to it for at least 2–4 weeks while you trial a targeted probiotic.\n2. Start daily probiotic + prebiotic support; use a multi-strain formula with prebiotics and a gut-repair ingredient to rebuild balance.\n3. Monitor energy and stool weekly; keep a simple log: stools, gas frequency, playfulness, and appetite. If you don’t see steady improvement, consult your vet with your log.[br]\n\n[b]Final note; why acting now matters[/b]\nThis is one of those problems where early, focused action produces fast wins. When you act now you’re protecting {answers.petName} from months of discomfort and saving time and money later. The formula described above is the exact type of approach that turns smelly farts and soft stools into normal digestion, and brings back the playful dog you remember."
          // },
          // results for the pawbiotix branch
          {
            type: "choice",
            id: "result_pawbiotix",
            question: "Results: Your Dog-Parent Gut Health Report Summary",
            description: "[b]From your test response:[/b] smelly farts, soft stools, and that {answers.petName} used to be playful but now seems tired, slow, or uninterested in walks. That combination is a clear signal pointing to {answers.petName}’s digestive system struggling to do its job. This is just about biology. Let’s walk through what that means, what stage you’re likely at, what can happen if nothing changes, and what to look for in a real solution when searching for one.[br]\n\n----\n[size=18px][b]What this likely means right now 🧠🐶[/b][/size]\n- Your dog’s gut bacteria balance is probably off. When digestion is unstable you get loose stools, gas, and low energy because nutrients aren’t being absorbed properly.[br]\n- The behavior change; less play or less interest in walks is often an early symptom of low energy from poor nutrient uptake and chronic low-grade inflammation.[br]\n- And smelly gases and inconsistent stools are the body’s way of telling you the microbiome needs support, not punishments or guesswork.[br]\n\n----\n[size=18px][b]Possible root causes of this problem 🔍⚠️[/b][/size]\n- Diet mismatch or low-quality kibble that doesn’t support a healthy microbiome.\n- Repeated antibiotic or medication exposure that disrupted beneficial gut bacteria.\n- Food intolerances or sudden diet switches that upset digestion.\n- Lack of prebiotic / probiotic support so the good bacteria can’t reestablish themselves.[br]\n\n----\n[size=18px][b]The stage you’re probably at right now 📉⏳[/b][/size]\nGiven soft stools + noticeable drop in energy, you’re most likely in an early-to-moderate imbalance phase: symptoms are real and recurring, but not yet catastrophic. It’s the perfect moment to act, because small, targeted changes produce visible turnaround here. Waiting lets the imbalance become chronic, harder to fix, and more expensive.[br]\n\n----\n[size=18px][b]What might happen if you ignore it 🚫🐾[/b][/size]\n- The short-term cost is ongoing discomfort for {answers.petName} and more vet visits and tests that could have been reduced with early action.\n- Letting gut imbalance persist often leads to chronic skin problems, lower immunity, and joint or mobility issues later because inflammation spreads.\n- Long-term neglect can shorten quality and of life and escalate treatment complexity therefore shortening {answers.petName}'s life' - the very thing good parents worry about most.[br]\n\n----\n[size=18px][b]Consider these when searching for a treatment 🧪🌱[/b][/size]\nWhen searching for a fix, you should be looking for a [b]targeted, daily probiotic formula for dogs[/b], not any of those vague so called “digestive supplements.” The exact must-have qualities of a real treatment for {answers.petName}'s gut issue are:\n- Multiple clinically useful probiotic strains: because a single strain rarely reshapes the microbiome; multiple strains create balance across the gut.\n- High CFU count in a stable, dog-safe delivery: you want enough live cultures to make an impact and a formula that survives stomach acid.\n- Prebiotic support (fiber like inulin or chicory): prebiotics feed the good bacteria, or the probiotics won’t stick around long-term.\n- Digestive-support ingredients (L-Glutamine, enzymes or similar): these help repair the gut lining and improve nutrient absorption.\n- Natural anti-inflammatory components (for example turmeric/PEA) where appropriate: to reduce gut inflammation without harsh drugs.\n- Pet-friendly flavor and easy daily dosing: it must be something you can reliably give every day, or it won’t work.\n- Transparent ingredient list and clinical references: you should be able to check what’s inside and why those ingredients matter.\n- Money-back guarantee or risk-reduction policy: outcomes vary and you deserve protection if it doesn’t help.[br]\n\n----\n[size=18px][b]Why most quick fixes fail ❌⏱️[/b][/size]\n- Some fixes usually include only single ingredients, and single-ingredient pills or random “digestive treats” rarely change the microbiome in a meaningful way; they mask symptoms for a while and then symptoms come back.\n- Most fixes insist only diet tweaks. Diet tweaks alone can help, but if the microbiome has been damaged by antibiotics or years of poor food, it usually needs a targeted daily support plan.\n- Throwing money at random supplements without a clear ingredient strategy isn't the best way and usually wastes lots of time and even keeps your dog stuck in the same loop.[br]\n\n----\n[size=18px][b]The Choice That Just… Makes Sense ⭐🐕[/b][/size]\nYou don’t need to waste weeks researching like newbies usually do, instead of leaving you to sort through endless products on the internet, here’s the one popular option that actually meets all the standard criteria of the ideal solution for {answers.petName}'s gut issue. This is the same gut-health formula vets and thousands of experienced dog parents rely on. It’s called Pawbiotix. It uses a mix of beneficial probiotic strains, natural prebiotics like chicory root inulin, and gut-support nutrients including L-Glutamine and turmeric - all in a dog-friendly beef-like flavor so dogs actually take it daily without a fight, which is the real reason it works long-term.[br]\n\n[b]See for yourself why Pawbiotix is the go-to probiotic for dogs. Click continue below to see it and some more info about it. 👇[/b]"
          },
          {
            type: "choice",
            media: { type: "image", src: "img/pawbiotix.jpg" },
            "question": "🦴 Pawbiotix; The Only Simple Fix That Gets {answers.petName} Back to Being Happy, Healthy, and Playful Again",
            "description": "You already know what Pawbiotix is; the daily dog probiotic formula built to reset {answers.petName}’s gut health, digestion, and energy levels.\n\nIt’s was that science-backed solution we mentioned in your Dog-Parent Health Report… but let’s take a closer look at why it actually works.\n\n[size=18px][b]🧬 Why Pawbiotix Works[/b][/size]\nPawbiotix targets the root cause of {answers.petName}’s tummy troubles.\nAnd instead of masking the symptoms, it works from the inside out by:\n- Rebuilding healthy gut bacteria destroyed by poor diet, antibiotics, or stress\n- Supporting digestion so nutrients are actually absorbed (not wasted)\n- Reducing inflammation that causes low energy and lazy behavior\n- Calming the digestive tract naturally without harsh chemicals or fillers\n\nThink of it like a daily tune-up for {answers.petName}’s whole system - from belly to brain.\n\n[size=18px][b]🧩 What’s Inside Each Drop[/b][/size]\n- 🍗 Chicken-flavored chewable formula - just so dogs actually enjoy taking it without a fight\n- 🦠 8+ clinically tested probiotic strains - this restores healthy gut flora\n- 🌾 Prebiotic fibers (chicory root, inulin) - to feed the good bacteria\n- 💪 L-Glutamine + digestive enzymes - for repairing gut lining and improving absorption\n- 🌿 Turmeric extract + natural anti-inflammatories - to soothe and protect\n- 🔬 Vet-approved & lab-tested for safety and purity\n- ♻️ Made in GMP-certified facilities - consistent quality every time\n\n[size=18px][b]🌟 Results You (and {answers.petName}) Can Expect[/b][/size]\n- Better stool consistency; firm, easy clean-up\n- Noticeably less gas and smell\n- More energy, more interest in walks and play\n- Shinier coat and improved appetite\n- Stronger immunity and fewer random off-days\n- Overall happier, more balanced mood\n\nMost owners start noticing small changes within 7–10 days of daily use; full improvements within 3–4 weeks.\n\n[size=18px][b]📊 Why It’s Trusted (and Not Just Hype)[/b][/size]\n- Over 120,000+ dogs have used Pawbiotix with visible improvements\n- 9 out of 10 pet parents reported firmer stools and better energy in under 3 weeks\n- Vet clinics recommend probiotics like Pawbiotix as part of long-term gut and immune care\n- 93% of surveyed users said their dogs act younger after consistent use\n\n[size=18px][b]🤔 Common Questions, Quickly Answered[/b][/size]\n- “My dog’s picky.” No problem, it’s flavored like a treat, not a pill. {answers.petName} will take it without a fight\n- “Is it safe long-term?” Yes. It’s made for daily use and formulated by vets.\n- “Can I give it with food or other supplements?” Absolutely, it pairs perfectly with normal diets.\n- “How fast will I see results?” Most owners see stool improvements in a week or two and energy improvements within a month.\n- “What if it doesn’t help?” There’s a money-back guarantee on their website. You literally lose nothing by trying it.\n\n[size=18px][b]🐾 This Will Be So Easy, It Becomes Routine[/b][/size]\nJust give {answers.petName} one tasty chew a day and that’s it.\nNo powders, no mixing, no tricking your dog into swallowing pills.\nYou’ll forget it’s health support because your dog will think it’s just another treat time all because of its chicken flavor.\n\n[size=18px][b]🚀 Why Pawbiotix Stands Just Out[/b][/size]\nUnlike most dog probiotics that focus on just one bacterial strain or digestive enzyme, Pawbiotix takes a whole-system approach, it includes probiotics + prebiotics + gut-repair nutrients + anti-inflammatory support.\nIt’s not just fixing poop; it’s rebuilding the whole gut environment - safely, naturally, and effectively.\n\n[size=18px][b]❤️ The Smart Move, Right Now[/b][/size]\n{answers.petName} doesn’t need another vet bill or random guesswork.\nYou’ve already learned what’s wrong, and now you know what works.\n\n[b]Tap the button below to go straight to Pawbiotix’s official page, where you can grab one and start {answers.petName} on the path to a better digestion, energy, and happiness. 👇[/b]\n\nIt’s just a small daily habit that brings {answers.petName}’s health, and spirit back to life.",
            options: [
              { text: "⚡tap here to activate button first  👈", href: "http://pawbiotix24.com/text.php#aff=twenty-five", target: "_blank", buttontext: "Get Pawbiotix from the Official Website", }
            ],
          },
        ]
      },
      {
        text: "Keeps scratching, biting skin, licking, or losing fur in patches, restless, anxious, startles easily, poor sleep",
        value: "anxiety",
        key: "pivotTopic",
        buttontext: "Continue",
        nestedQuestions: [
          // EMF/anxiety branch - environment and restlessness questions
          {
            id: "a_restless",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 6 of 9[/i][/size][/color]\n\nWhich of these describes how {answers.petName} is acting most often?",
            options: [
              { text: "Pacing, panting, restless frequently", value: "pacing", key: "anxType", comment: "Frequent pacing and panting are signs of chronic stress; letting it continue is forcing a nervous life on your dog because of inaction." },
              { text: "Startles at small noises or devices", value: "startle", key: "anxType", comment: "Startling easily suggests heightened environmental sensitivity; ignoring it lets fear harden into permanent anxiety." },
              { text: "Chews or destroys items when near tech", value: "chewing", key: "anxType", comment: "Destructive chewing around electronics or cords shows agitation that you are tolerating; that unwillingness to intervene creates danger and stress." },
              { text: "Sleeps poorly or wakes repeatedly at night", value: "sleepproblems", key: "anxType", comment: "Poor sleep undermines recovery and health; failing to fix sleep issues sacrifices both your and {answers.petName}'s wellbeing." }
            ]
          },
          {
            id: "a_devices",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 7 of 9[/i][/size][/color]\n\nHow common are electronic devices around {answers.petName} (phones, Wi-Fi router, smart devices)?",
            options: [
              { text: "Devices everywhere in main living area", value: "everywhere", key: "deviceExposure", comment: "Constant device exposure means constant invisible stimulation; choosing convenience over mitigation leaves your dog to suffer silently." },
              { text: "Some devices but not constant", value: "some", key: "deviceExposure", comment: "Occasional exposure still adds up over time; ignoring the accumulation is a slow way to degrade health and behavior." },
              { text: "Very few devices near them", value: "few", key: "deviceExposure", comment: "Limited device exposure helps, but if symptoms exist you cannot assume environment is harmless; complacency risks regression." },
              // { text: "I keep devices away from their space", value: "kept_away", key: "deviceExposure", comment: "Keeping devices away is responsible; neglecting to address other stressors, however, still leaves gaps you must close." }
            ]
          },
          {
            id: "a_duration",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 8 of 9[/i][/size][/color]\n\nHow long have these anxious or restless behaviors been happening for {answers.petName}?",
            options: [
              { text: "A few days", value: "days", key: "anxDuration", comment: "Even a few days of unrest matter; letting short-term stress become chronic is the fastest route to entrenched problems." },
              { text: "Weeks", value: "weeks", key: "anxDuration", comment: "Weeks of symptoms means adaptation to stress; tolerating that adaptation is allowing harm to become normal." },
              { text: "Months", value: "months", key: "anxDuration", comment: "Months of anxiety are a failure to act earlier; that delay has cost you and {answers.petName} time and emotional safety." },
              { text: "Years", value: "years", key: "anxDuration", comment: "Years of unresolved anxiety is chronic neglect by omission; living with it is a choice that shortchanges your dog's life." }
            ]
          },
          {
            id: "a_mitigation",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 9 of 9[/i][/size][/color]\n\nHave you tried any consistent calming or environmental changes for {answers.petName}?",
            options: [
              { text: "Yes - a consistent routine and changes", value: "yes_routine", key: "anxTried", comment: "A consistent approach is the right path; if results stalled it means the steps were incomplete and must be upgraded rather than abandoned." },
              { text: "I tried toys or CBD or random fixes", value: "random_fix", key: "anxTried", comment: "Random fixes without a cohesive plan waste hope and money and allow the core problem to persist, which will leave you blaming circumstances instead of taking effective action." },
              { text: "No, I haven't addressed the environment", value: "no_env", key: "anxTried", comment: "Not addressing the environment is prioritizing convenience over care and is why many owners end up with avoidable chronic anxiety in their dogs." },
              { text: "I consulted a pro but didn't follow through", value: "pro_no_follow", key: "anxTried", comment: "Consulting someone and not following through wastes both your time and the dog's chance at recovery; that half-effort is still failure." }
            ]
          },
          {
            "id": "optin_emfdefense",
            "type": "opt-in",
            "question": "",
            "description": "⚠️ Your responses indicates EMF exposure-linked stress loops that could be silently disrupting {answers.petName}’s comfort, sleep, focus, and mood.\n\nWe’ve just completed [b]{answers.petName}'s EMF Exposure Report[/b] (your results), complete with your risk level and an evidence-based protection plan for {answers.petName}’s safety.\n\nEnter your name and email below to view and receive your full results directly in your inbox.",
            "inputs": [
              { "type": "text", "key": "fullName", "placeholder": "Full name", "comment": "Thanks {answer}!" },
              { "type": "email", "key": "emailAddr", "placeholder": "you@example.com", "comment": "We’ll email {answer} your full report." }
            ],
            "sheetName": "EMFDefenseLeads",
            "waitingbutton": "Preparing Report..."
          },
          // the emf results page
          {
            id: "result_emf",
            type: "choice",
            question: "🐶 {answers.petName}'s EMF Report; Your Results",
            description: "Based on the answers you gave, especially the signs about [b]scratching, patchy fur loss, restlessness, being easily startled, constant licking, and poor sleep.[/b] Considering any of these signs, it looks like {answers.petName} may be reacting to low-level EMF stress in your environment or neighborhood. Here’s a clear, simple read on what that means and what to do next.\n\n----\n[size=18px][b]🔬 Quick explanation; how EMF affect dogs[/b][/size]\nElectromagnetic fields (EMF) are invisible signals from things like Wi-Fi routers, phones, smart devices and nearby cell towers. Dogs move through these signals all day. For some breeds, constant exposure can act like low-level environmental stress: it can make them more jumpy, disrupt restful sleep, and increase nervous behaviors. This is not a single, dramatic event; it’s more like small, repeated nudges that can change how a nervous system feels and behaves over time.\n\nThat’s why you might see any thing like scratching, constant licking, sudden startle responses, or broken sleep patterns in {answers.petName}. Those are common ways dogs show they’re not fully at ease.\n\n----\n[size=18px][b]⚠️ Possible causes of this issue[/b][/size]\n- [b]Constant device proximity:[/b] If phones, routers, or smart devices sit where {answers.petName} sleeps, it increases exposure.\n- [b]High-sensitivity personality:[/b] Some breeds are naturally more alert and react more to subtle stressors.\n- [b]Compounding daily stress:[/b] Small exposures plus poor sleep add up and make behavior worse.\n- [b]Unresolved discomfort:[/b] Scratching, licking or fur loss can be partly physical, but nervous agitation makes it worse and prevents healing.\n\n----\n[size=18px][b]📈 The level you’re likely at now[/b][/size]\nFrom what you described, {answers.petName} is in a [b]early-to-mid chronic stress phase[/b]. At this stage, you vould already notice any or all of these signs below in {answers.petName}:\n- physical irritation (scratching, biting skin, licking)\n- emotional agitation (restlessness, easy startle)\n- disrupted sleep rhythm\n- loss of fur in small or medium patches\nAlthough it’s not the “worst stage” yet, but it’s also not the harmless stage. It’s not yet an emergency, but it’s steady enough to lower quality of life and even inhibit {answers.petName}'s life span if it’s not addressed. Right now, {answers.petName} is in the zone where the body is still fighting, adapting, and compensating; but not comfortably.\n\n----\n[size=18px][b]⚠️ What happens if it continues (the real risk) 😟[/b][/size]\nIf the cycle continues, the issue won’t just stay “a bit of scratching and bad sleep.” It will slowly become a full pattern that affects the things that matter most to {answers.petName} and to you. Over time, chronic stress from EMF exposures will now push a sensitive pet like {answers.petName} into what’s basically an overwhelmed state. And when a dog reaches that point, you start seeing deeper ripple-effects:\n- Their immune system might weaken, making them catch small illnesses more easily leading to constant vet visits.\n- Their Skin irritation may spread, and fur may thin out in larger patches.\n- Persistent poor sleep can lower their natural mood and make them less playful.\n- Their Anxiety can compound, so they overreact to normal noises or simple interactions.\n- They may pull away from connection, becoming distant or harder to comfort.\n\nSo simply put: all these if neglected will eventually leave {answers.petName} more vulnerable to infections, long-term health issues, and even in the harshest cases - conditions that can shorten {answers.petName}'s lifespan far earlier than {answers.petName} deserves.\n\nTherefore, protecting that early keeps the problem from ever reaching that uncomfortable “identity shift” stage, where they’re no longer acting like the pet you know, simply because their system is overwhelmed.\n\n----\n[size=18px][b]🛠️ What an effective fix should look like[/b][/size]\nIf you ever try to find help for EMF-related dog stress on your own, the options online get confusing fast. Most “solutions” fall into these categories:\n\n- generic behavior training (which won’t fix an environmental trigger)\n- calming treats (which mask stress but don’t block EMF exposure)\n- home detox ideas (which barely affect EMFs at all)\n- inconsistent DIY suggestions with mixed results\n\nBut based on your results and the specific patterns you selected, the most effective solution is always the same. So when you’re looking for a solution, it should do more than sell a promise. It should boast these exact set of qualities:\n\n- [b]Wearable and pet-friendly design.[/b] Why: the fix must be something the dog can wear comfortably all day to help mitigate the effects of these exposure to electromagnetic fields (EMFs) in your neighbourhood so protection is consistent.\n- [b]Passive protection (no active electronics needed).[/b] Why: a passive device doesn’t add new signals or complications and is simpler to use.\n- [b]Lightweight and waterproof.[/b] Why: it must stay on during walks, baths, and normal activity without bothering {answers.petName}.\n- [b]Non-invasive and safe materials.[/b] Why: sensitive skin or allergies mean materials must be hypoallergenic and gentle.\n- [b]Fast observable calming effect in days.[/b] Why: if a device helps, owners should see reduced startle and better sleep quickly; otherwise it’s probably not doing anything meaningful.\n- [b]Clear return policy / guarantee.[/b] Why: you should be able to test it risk-free and get a refund if it doesn’t help.\n- [b]Positive owner feedback (real people, not hype).[/b] Why: real reports from other pet owners help show the product works in home situations like yours.\n\n----\n[size=18px][b]🧷 What we always recommend[/b][/size]\nAfter doing all the research and sorting through what actually works for dog-specific EMF support, doing all the hard and confusing work for people like you, there’s always been one option that matches every quality above without missing not even a single point: That tool is called the [b]EMF Defense Pet Pendant[/b],\n\nIt's a light wearable pet pendant that you can attach to {answers.petName}'s collar, it aims to reduce EMF radiation waves on dogs by creating a calmer local protective energy waves around them using pieces of advanced technology. It’s passive, comfortable, and designed for everyday use. That's why it's #1 defense against the electromagnetic radiation we're exposed to daily.\n\nThe main reasons why recommend it:\n- It uses advanced tech to create it's own calmer local protective energy waves around it's wearer, making them EMF proof, giving them time to recover from past EMF damage.\n- It’s easy to use for busy owners like you; you don’t need to rearrange the entire house, or throw away certain gadgets.\n- Many owners on review sites report improved behavior within weeks, which is the kind of quick feedback you want to see for.\n\n----\n[size=18px][b]⏱️ Why this saves you time and worry[/b][/size]\nInstead of trying dozens of random fixes or rearranging your home, Just use this single, tested wearable tool which focuses on the pet directly. That means less guesswork, fewer product experiments, and a faster path to less scratching, licking, biting skin, and overall recovery.\n\n[b]click on the button below to learn even more about the \"[i]EMF Pet Pendant[/i]\" and the most secured place to get it on the next page 👇[/b]"
          },
          {
            type: "choice",
            media: { type: "image", src: "img/emf.png" },
            question: "EMF Defense Pet Pendant; Quick Product Brief for {answers.petName}",
            description: "[b][size=18px]📌 Reminder of what this tool is[/size][/b]\nThe EMF Defense Pet Pendant is just a small, lightweight pendant that clips to your dog’s collar. It is designed to create a calmer local protective energy waves around the pet that reduces the small, constant stress that some pets get from some electronic devices. You already saw this idea on your results page; this is the tool form that actually delivers it.\n\n----\n[b][size=18px]💡 Why this kind of product can help[/size][/b]\nThe pendant works by providing passive protective waves right around the pet's body. Because it will worn on the collar, it will keep the reduced-stress waves effect close to {answers.petName} all day, even when devices are nearby or when you move around the house or your neighborhood. That steady, local protection is what many owners say helps reduce startle, restlessness, and disrupted sleep.\n\n----\n[b][size=18px]🔧 Features of this pet pendant[/size][/b]\n- It's a lightweight pendant that attaches to a collar so {answers.petName} can wear it all day.\n- Has a passive design with no batteries or active electronics required.\n- Boasts a water-resistant construction for normal walks and light baths.\n- Has hypoallergenic materials so it is gentle on skin and fur.\n- Comes in a small, unobtrusive profile so it does not get in the way of play.\n- Has a 180-day money-back guarantee so you can test it risk-free.\n- It's available with quick shipping and simple instructions.\n\n----\n[b][size=18px]❤️ Benefits for you and {answers.ownerName}[/size][/b]\n- Peace of mind for you, because you’re no longer watching helplessly as your dog absorbs invisible stressors you can’t control on your own.\n- A safer emotional baseline for {answers.petName}, lowering the risk of stress-driven habits that can turn into self-harm like hair pulling or excessive chewing.\n- A calmer, more stable daily rhythm that reduces the constant stress load on {answers.petName}’s body before it snowballs into something more serious.\n- Fewer anxious spikes that gradually wear down their immune system, giving you the comfort of knowing hidden stress isn’t quietly shortening their health or lifespan.\n- The relief of knowing you’re actively protecting {answers.petName} instead of watching helplessly as {answers.petName} struggle with these invisible EMF stressors, or just hoping things won’t get worse.\n\n----\n[b][size=18px]📊 Internet findings and facts[/size][/b]\n- Used by thousands of pet owners in home settings.\n- Many customers report noticeable recovery within weeks of regular wear.\n- Customer feedback commonly highlights positive effects.\n> [i]These are summary results based on customer reports and user surveys form review sites.[/i]\n\n----\n[b][size=18px]❓ Quick answers to common objections[/size][/b]\n- [b]\"Will it bother my dog?\"[/b] No, it is lightweight and designed to sit comfortably on a collar so most dogs forget they are wearing it.\n- [b]\"Is it safe?\"[/b] Yes, the pendant is passive, has no power source, and uses skin-safe materials.\n- [b]\"Does it need charging or setup?\"[/b] No, there are no batteries and no setup, so you simply attach it to the collar.\n- [b]\"What if it doesn't work for {answers.petName}?\"[/b] There is a 180-day guarantee on their website that lets you try it and return it if it does not help.\n- [b]\"Is this a medical device?\"[/b] No, this is an environmental support tool meant to reduce EMF stress signals, not a medical treatment.\n\n----\n[b][size=18px]✅ How simple and easy it is to use[/size][/b]\n1. Just Clip the pendant to {answers.petName}’s collar.\n2. Then let {answers.petName} wear it during normal daily life.\n3. And observe for a few days or weeks for positive behavioral changes.\n4. Then keep using it always to protect {answers.petNmae}.\n\nMost owners see changes with minimal effort, because you are only adding one small thing to your dog’s daily setup.\n\n----\n[b][size=18px]🌟 What makes it different from others[/size][/b]\n- It is [b]worn on the pet[/b], so protection is constant instead of only working near one room, or removeing certain gadgets from your house hold.\n- It is [b]passive[/b], which means no new devices or power sources are added to your home. And works with minimal to zero efforts.\n- It is [b]designed for comfort[/b], it haas no gimmicks, and made good so your dog can live normally while wearing it.\n- It comes with a [b]long guarantee[/b], which shows confidence and lowers your risk.\n\n----\n[b][size=18px]🔗 Ready to try it for {answers.petName}?[/size][/b]\nIf the idea of reducing EMF overload on {answers.prtName} using the [b]EMF Defense Pet Pendant[/b] for an easier, quality and a long life for {answers.petName} sounds right to you, then {answers.petName} must be lucky to have you as a parent. Click the button below to visit the official product page and get the pendant from the maker.",
            options: [
              { text: "⚡tap here to activate button first 👈", href: "https://youremfshield.com/pages/pet-emf-defense-pendant-dg-2-0#aff=twenty-five", target: "_blank", buttontext: "Check Out The EMF Tool on the Official Website", }
            ],
          },
        ]
      },
      {
        text: "Doesn't listen, ignores commands, pulls on leash, jumps on guests, or barks nonstop for attention",
        value: "obedience",
        key: "pivotTopic",
        buttontext: "Continue",
        nestedQuestions: [
          // Training/obedience branch - behavior control questions
          {
            id: "t_ignore",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 6 of 9[/i][/size][/color]\n\nWhen you give a simple command (sit, stay, come), how does {answers.petName} usually respond?",
            options: [
              { text: "Usually ignores me", value: "ignore", key: "trainResp", comment: "Ignoring basic commands shows a leadership gap and inconsistent training; letting it continue hands over control of your life to the dog." },
              { text: "Sometimes follows, sometimes not", value: "sometimes", key: "trainResp", comment: "Inconsistency from you or your routine teaches confusion; that unclear leadership is why problems persist and escalate." },
              { text: "Follows most commands reliably", value: "reliable", key: "trainResp", comment: "Reliable responses are a sign of structure; keep it up and refine, but if you slip the dog will test boundaries quickly." },
              { text: "Only responds with treats or after long delay", value: "treats", key: "trainResp", comment: "Dependence on treats for every response is shallow training that fools no one and leaves you paying for a brittle obedience that can break anytime." }
            ]
          },
          {
            id: "t_leash",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 7 of 9[/i][/size][/color]\n\nHow does {answers.petName} behave on leash walks?",
            options: [
              { text: "Pulls constantly and lunges", value: "pulls", key: "leashBehavior", comment: "Constant pulling signals unchecked leadership and poor routine; tolerating it makes walks stressful and unsafe for both of you." },
              { text: "Pulls sometimes, manageable", value: "sometimes_pull", key: "leashBehavior", comment: "Occasional pulling indicates gaps in consistency; patchwork fixes leave the problem ready to flare up again." },
              { text: "Walks calmly most of the time", value: "calm", key: "leashBehavior", comment: "Calm walking shows structure, but even calm dogs need reinforcement; complacency invites regression." },
              { text: "I avoid walks because it's a struggle", value: "avoid", key: "leashBehavior", comment: "Avoiding walks to dodge behavior is surrendering part of your life because of inaction; that's a costly choice you will regret." }
            ]
          },
          {
            id: "t_destruction",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 8 of 9[/i][/size][/color]\n\nDoes {answers.petName} chew, destroy furniture, or damage items when bored or alone?",
            options: [
              { text: "Yes - frequently destroys things", value: "destroys", key: "destruction", comment: "Frequent destruction is a symptom of unmet needs and poor routines; tolerating it damages your home and proves you haven't solved the root cause." },
              { text: "Sometimes, when left too long", value: "sometimes_dest", key: "destruction", comment: "Intermittent destruction signals inconsistent engagement; expecting it to stop without structure is wishful thinking." },
              { text: "Rarely or never", value: "rarely_dest", key: "destruction", comment: "If destruction is rare you are doing some things right, but assuming that means no work is needed will likely backfire." },
              { text: "I crate or confine them to avoid it", value: "crate", key: "destruction", comment: "Using confinement without training teaches avoidance rather than leadership and often shifts the problem rather than fixing it." }
            ]
          },
          {
            id: "t_training_attempts",
            type: "choice",
            question: "[color=#eb4034][size=18px][i]Question 9 of 9[/i][/size][/color]\n\nHave you consistently used a single, structured training method for at least 30 days?",
            options: [
              { text: "Yes, consistent method", value: "yes_consistent", key: "trainTried", comment: "Consistency is essential; if you still struggle it means the method needs refinement, not abandonment." },
              { text: "No, I bounce between tips and videos", value: "no_bounce", key: "trainTried", comment: "Flipping between tips teaches confusion and rewards the dog for testing boundaries; this inconsistency is why many owners fail." },
              { text: "I hired a trainer but didn't follow instructions", value: "trainer_no_follow", key: "trainTried", comment: "Hiring help and ignoring the homework wastes money and leaves you responsible for failure when results vanish." },
              { text: "I haven't tried any formal training", value: "none", key: "trainTried", comment: "Not trying structure means accepting that your lifestyle will be shaped by the dog's misbehavior, and that acceptance carries blame." }
            ]
          },
          {
            "id": "optin_trainingbible",
            "type": "opt-in",
            "question": "",
            "description": "⚠️ Based on your answers, we’ve identified communication breakdowns and emotional triggers that may be confusing or frustrating {answers.petName} and you.\n\nYour [b]Dog-Parent Behaviour Alignment Report[/b] is ready, featuring your emotional match score and step-by-step corrections to rebuild connection and obedience.\n\nEnter your name and email below to access and receive your full report in your inbox.",
            "inputs": [
              { "type": "text", "key": "fullName", "placeholder": "Full name", "comment": "Thanks {answer}!" },
              { "type": "email", "key": "emailAddr", "placeholder": "you@example.com", "comment": "We’ll email {answer} your full report." }
            ],
            "sheetName": "TrainingBibleLeads",
            "waitingbutton": "Generating Insights..."
          },
          // the trainer bible resu;lts page
          {
            id: "result_trainingbible",
            type: "no-answer",
            question: "🐕 Your Quiz Results; Behaviour Report for {answers.petName}",
            description: "You told us {answers.petName} “doesn't listen, ignores commands, pulls on the leash, jumps on guests, or barks nonstop for attention.” If any one of these is really the behaviour of {answers.petName}, then that indicates a clear set of communication problems betwenn you two. Here’s what that pattern means, why it happens, and what actually fixes it.\n\n----\n[size=18px][b]🧠 What’s really going on. . .[/b][/size]\nWhen a dog ignores commands and acts out on walks or around people, it usually isn’t spite or stubbornness. It’s a leadership and clarity problem. Tt's your problem. It means {answers.petName} is getting mixed signals or no consistent rules, so they choose whatever gets results faster - attention, access, or avoidance. In short: they learned the wrong thing because the training signals they’re getting are unclear or inconsistent.\n\n----\n[size=18px][b]🔍 Common causes based on your answers[/b][/size]\n- [b]Inconsistent cues and rewards.[/b] If commands are reinforced sometimes and ignored other times, the dog learns that obeying isn’t reliable.\n- [b]No clear sequence or structure.[/b] Short, sloppy training teaches temporary tricks not real obedience.\n- [b]Over-reliance on treats or delayed rewards.[/b] If rewards come at the wrong moment, the dog learns the wrong behavior.\n- [b]Lack of leadership in key moments (walks, guests, attention-seeking).[/b] When you avoid enforcing rules during stress, the dog decides the rules.\n- [b]Partial or patchy training history.[/b] Trying random tips or videos without a single plan leaves gaps that the dog exploits.\n\n----\n[size=18px][b]📈 The level you’re at now[/b][/size]\nFrom your answers, {answers.petName} is in a [b]“confused follower”[/b] stage: they understand a few things sometimes, but they are not consistently obedient. That means progress is possible quickly if you apply a solid system, but piecemeal efforts will only prolong the problem.\n\n----\n[size=18px][b]⚠️ What happens if nothing changes[/b][/size]\nIf this pattern persists, small misbehaviors become normalized. Leash pulling grows worse and makes walks stressful. Jumping on guests turns into social embarrassment and limits where you can bring {answers.petName}. Constant attention-seeking trains anxiety and barking becomes automatic. Over time you’ll lose freedom to take your dog places and your life will be shaped around managing problems instead of enjoying your pet.\n\n----\n[size=18px][b]🔥 The extreme level; what it could become[/b][/size]\nLeft unchecked, confusion becomes defiance, and defiance becomes risky: people could get knocked over by a large dog, repeated complaints from neighbors could escalate, and you might end up paying for professional behavior help repeatedly because the foundation was never built properly. That’s expensive and emotionally draining.\n\n----\n[size=18px][b]🧭 What a real solution must be[/b][/size]\nIf you go looking for help, or searching online or google for a solution to fix the mis comprehension between you and {answers.petName}, only consider a solution legit during search if it meets all these criteria below. A real solution must be;\n\n- [b]A full step-by-step training system.[/b] Why: half-measures teach half-behaviors; only a full sequence creates lasting obedience.\n- [b]Clear timing and reinforcement rules (when to reward).[/b] Why: the dog’s learning depends on precise timing; the right reward at the wrong second teaches the wrong thing.\n- [b]Practical routines for walks, guests, and attention moments.[/b] Why: those are the trigger scenarios; you must practice the right response there.\n- [b]Templates and checklists you can follow daily.[/b] Why: consistency wins; checklists make consistency simple even when life is busy.\n- [b]Guidance for all dog ages and personalities.[/b] Why: a method that only works for one age or temperament will fail in mixed real-life homes.\n- [b]Non-punitive, science-based methods that build leadership and trust.[/b] Why: harsh punishment breaks the bond and creates fear, which will worsen {answers.petName} behavior in the long run.\n- [b]Practical troubleshooting for relapses and edge cases.[/b] Why: problems return if you can’t diagnose what went wrong and fix it fast.\n\n----\n[size=18px][b]📚 The solution we always recommend[/b][/size]\nAfter years of digging through what actually works for real behavior change in dogs, filtering out the hype, the guesswork, and the stuff that falls apart in real life - only one solution consistently meets every requirement above: the Dog Trainer Bible. It’s the only full, proven training system that gives you step-by-step guidance, and practical templates so you actually learn how to understand your dog… {answers.petName} not just collect random tricks. That's why it's a good history to thousands of dog parents.\n\nWhy it’s a good fit for what you told us about {answers.petName}:\n- It provides a [b]complete, structured program[/b] so you stop piecing together conflicting tips.\n- It teaches [b]timing and reinforcement[/b] the right way, so rewards actually produce the behavior you want.\n- It includes [b]walk and guest routines[/b], which are the exact stress points you mentioned.\n- It comes with [b]templates and progress-tracking[/b] tools so your effort is consistent and measurable.\n- It’s built for [b]all ages and common problem types[/b], so it works whether {answers.petName} is a puppy or an older dog with habits.\n- The methods are [b]humane and practical[/b], focusing on clear leadership and positive change rather than punishment.\n\n----\n[size=18px][b]💡 Why this saves you time, money, and stress[/b][/size]\nInstead of paying for individual trainer sessions or trying thousands of conflicting internet tips, this collection puts the proven principles in one place. That means you stop wasting time, try fewer random fixes, and get consistent results faster. You also gain the confidence to manage training yourself; so you don’t keep paying for short-term fixes.\n\n[b]click on the button below to learn even more about the \"Dog Trainer Bible\" and the most secured place to get it on the next page 👇[/b]"
          },
          {
            id: "semi_bridge_trainingbible",
            type: "choice",
            media: { type: "image", src: "img/train.png" },
            question: "Dog Trainer Bible; The Practical Fix for {answers.petName}",
            description: "You already saw on your results page that your dog is struggling with ignoring commands, or pulling on the leash, or jumping on guests, or even barking nonstop for attention. And the Dog Trainer Bible is the resource we recommended as a fit fix. It’s a clear, step-by-step training system with ready-made templates built to help you fix those exact problems quickly and confidently.\n\n----\n🔧 [size=18px][b]Why this works[/b][/size]\nThe Dog Trainer Bible isn't just a bunch of random tips. It’s a structured training system that teaches you the right sequence, timing, and routines so {answers.petName} learns what you actually mean the way you actually mean. The guides break everything down into small, repeatable steps that dogs can understand, and owners can follow.\n\n----\n📚 [size=18px][b]What’s inside[/b][/size]\n- 37 easy-to-follow eBooks covering basic obedience, leash work, guest manners, and problem behaviors.\n- 1.5-hour audio program with extra tips you can listen to on the go.\n- Ready-made templates: training logs, progress charts, behavior assessments, and checklists.\n- Step-by-step routines for walks, greetings, and attention training.\n- Troubleshooting guides for relapses and difficult cases.\n- Lifetime digital access; open on phone, tablet, or laptop.\n- 60-day money-back guarantee.\n\n----\n🎯 [size=18px][b]What this gives you; benefits [/b][/size]\n- Walks that are calm instead of a daily struggle.\n- Fewer jumps and less barking when guests arrive.\n- Clear, reliable responses to basic commands.\n- Less time and money spent on repeated trainer visits.\n- Better bond with {answers.petName} because training is consistent and fair.\n- Confidence for you: know exactly what to do and when.\n\n----\n📈 [size=18px][b]Real talk on usage & results[/b][/size]\n- Used by thousands of dog owners who needed a single system that actually worked at home.\n- Most people notice clearer responses within a week of following the daily routines.\n- Designed from proven training principles that only pros use, not guesswork; so won't be wasting time on trendy fixes.\n\n----\n❓ [size=18px][b]Quick answers to common objections[/b][/size]\n- [b]“I don’t have time.”[/b] The program is built for busy owners. Daily steps take minutes, not hours.\n- [b]“My dog is too old / too stubborn.”[/b] This teaches habit change, which works for puppies and older dogs alike.\n- [b]“I’ve tried trainers and it didn’t stick.”[/b] Templates and repetition tools keep you consistent, that’s what makes changes permanent.\n- [b]“Is it harsh?”[/b] No. The methods focus on clear signals and fair reinforcement, not punishment.\n- [b]“What if it fails?”[/b] There’s a 60-day money-back guarantee so you can test it risk-free.\n\n----\n🛠️ [size=18px][b]How easy it is to use[/b][/size]\n1. Download the digital pack to any device.\n2. Read Day 1 (5–10 minutes).\n3. Follow the short daily routine and use the templates to track progress.\n4. Use troubleshooting guides if {answers.petName} regresses.\n> [i]The plan is built so owners can actually follow it and see steady progress.[/i]\n\n----\n✨ [size=18px][b]What makes it unique[/b][/size]\n- It’s a [b]field guide[/b], not a single video; it has 37 focused manuals you can dip into whenever you need.\n- It combines [b]training theory + practical templates[/b], so you don’t just learn ideas, you do the work and track it.\n- It’s tailored for real homes; walks, guests, feeding time, and not just studio tricks.\n\n----\n🚀 [size=18px][b]Ready to get the training that actually works for {answers.petName}?[/b][/size]\nThis is your chance to stop the confusion for both you and {answers.petName}. If you want the exact steps that make training actually stick, this is where it starts. Click below to open the official website before you lose the momentum you’ve built today.",
            options: [
              { text: "⚡tap here to activate button first 👈", href: "https://www.digistore24.com/redir/557533/twenty-five/", target: "_blank", buttontext: "Check It Out From the Official Website", }
            ],
          },
        ]
      }
    ]
  }
]
