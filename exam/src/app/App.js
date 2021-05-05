import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import '../components/css/items.css'
import { Route } from 'react-router-dom';
import Detail from '../components/Detail.js'
import Contacts from '../components/Contacts'
import Register from '../components/Register'
import About from '../components/About'
import Cards from '../components/Cards.js'

const App = () => {

  const news = [
    {
      id: "1",
      short_title: "Scavengers ditching",
      title: "Scavengers ditching Twitch key drops, will be available to everyone May 1",
      content: "Free-to-play battle royale hybrid Scavengers had a bit of a rocky start in Early Access this week, due to issues with servers and Steam keys. Keys could only be claimed by watching streamers playing the game Twitch, and some viewers never got theirs. Also, Scavengers actually ran out of Steam keys to distribute. There were, as there often are with new games, some server crashing issues as well. So a bit of a messy soft launch, but sounds like the server issues have been resolved, and even better, players won't have to watch Twitch streams or keep checking their inboxes for a key. Scavengers enters Early Access properly tomorrow, May 1, and it'll be available to everyone with no key needed to unlock it. It's an abrupt change of plans—just yesterday the developers said they might 'move off keyed access' at some point, but now it looks like they've committed to flinging open the doors. Starting Saturday at 9 am PT / 12 pm ET / 5 pm BST, Scavengers will be available to everyone. Fingers crossed the servers hold up.",
      shor_content: "Free-to-play battle royale hybrid Scavengers...",
      image: "https://cdn.mos.cms.futurecdn.net/Z2rNzsULLF38mYqQKSisui-970-80.jpg.webp"
    },
    {
      id: "2",
      short_title: "FIFA 21",
      title: "FIFA 21 is coming to EA Play and Xbox Game Pass for PC next week",
      content: "FIFA 21, the latest addition to EA's long-running soccer series, is headed to EA Play and Xbox Game Pass Ultimate next week, and that means that Xbox Game Pass for PC subscribers are going to get it too.EA Play members will also have access to exclusive FIFA 21 content including in-game challenges and rewards, FIFA Ultimate Team kits, Volta Football gear, and a seasonal XP boost at the start of each FUT season. Through the month of May, subscribers will also be able to snag a Volta Squad Boost featuring Groundbreaker Trent Alexander-Arnold and the Liverpool FC Apparel Set, plus 3,500 Volta coins.It's a big addition for EA Play subscribers—the FIFA series is tremendously popular, although perhaps more in Europe than North America—and also potentially very lucrative for EA itself: Electronic Arts said in its most recent financial report that its strong quarterly results were 'driven by live services outperformance in Ultimate Team and Apex Legends.'Making the base game free will almost certainly expand the FUT audience dramatically, although it could invite fresh headaches for the publisher, too: A recent CBC report on leaked documents showing that EA wants to 'funnel' FIFA players into FUT sparked considerable controversy, despite not revealing anything particularly new.EA Play's basic tier was added to Xbox Game Pass for PC in March, at no extra cost, making it a pretty fantastic deal for gamers who aren't hung up on the concept of ownership. You can get the full list of games included with Xbox Game Pass for PC and EA Play here, and details on how it works with Xbox Game pass in this FAQ.",
      shor_content: "The latest addition to EA's long-running soccer...",
      image: "https://cdn.mos.cms.futurecdn.net/BsUVUmgtHTfdRiHcpENoaU-970-80.jpg.webp"
    },
    {
      id: "3",
      short_title: "Titanfall",
      title: "Titanfall 2 is free for the weekend on Steam",
      content: "Titanfall 2 is a really great FPS that, for a variety of reasons (but really, just one) tanked badly when it came out in 2016. Its release on Steam last year kicked off a remarkable resurgence in interest, however, which recently got another big boost thanks to the presence of Titanfall 2 content in Apex Legends.If you haven't already sampled its many pleasures for yourself, you can now do so for free: Titanfall 2 is fully free to play on Steam until 10 am PT/1 pm ET on May 3. Just mash the 'Play Game' button and wait for a 30GB download to grind through, and you'll be ready to jump in and start shooting. Multiplayer is on tap too, but personally I'd recommend sticking with the campaign—it's really good.As an eternal optimist, I feel a spark of hope that maybe—maybe—all of this activity and interest will eventually lead us toward a new and long overdue Titanfall game. In the meantime, we have Apex, which is set in the same universe, and the new competitor Valkyrie, a hotshot Titan pilot who will join the action in season 9, which begins on May 4. It's not the same as wall-running and getting fastballed by BT-7274, but it's pretty good stuff in its own right.",
      shor_content: "A perfect opportunity to see what all the fuss is about...",
      image: "https://cdn.mos.cms.futurecdn.net/HUWF4jpbndxnoybzdfEErZ-970-80.jpg.webp"
    },
    {
      id: "4",
      short_title: "Riot will start",
      title: "Riot will start recording Valorant voice chat to root out toxic players",
      content: "Riot will start recording voice chat in Valorant for the purpose of moderation, the company announced today. There won't be a way to opt-out other than not using voice chat. 'We know disruptive behavior using our voice chat is a concern for a lot of players, and we’re committed to addressing it more effectively,' the developer said. 'In order for us to take action against players who use voice comms to harass others, use hate speech, or otherwise disrupt your experience, we need to know what those players are saying.'It's no secret that multiplayer games can be nasty spaces. Toxicity is a constant in every multiplayer shooter I play, and Valorant is one of the worst. During its pre-release beta, a Riot UX designer tweeted a video of the harassment she'd been receiving in Valorant. Replying to the tweet, Valorant executive producer Anna Donlon committed to finding 'long-term solutions' to help curb toxicity.",
      shor_content: "Players can either opt-in to Riot's new moderation rules or...",
      image: "https://cdn.mos.cms.futurecdn.net/3dy2mR9sobpcUgSkfyg5vm-970-80.jpg.webp"
    },
    {
      id: "5",
      short_title: "Paradox",
      title: "Paradox Interactive says player toxicity is driving developers away from its forums",
      content: "Grand strategy studio Paradox Interactive has spoken out against the rise of toxic behavior in its fanbase, saying in the latest Hearts of Iron 4 developer diary that its developers 'have gotten a little sparse in these forums in the last few months' because they're tired of dealing with the crappy behavior.'Often we do face a debate culture that is not enjoyable to take part in, where it is taken as a given that the devs are either lazy or incompetent and where everything we do is viewed through that lens,' content designer Archangel85 wrote. 'Not only is it incredibly demoralizing to spend months of your life creating something, only to see the people you made it for tear it to shreds, it is also a debate that gives no one anything.'Archangel85 was making a practical point, not just referencing the emotional drain of constant online beefing. 'We aren’t paid to wade through pages of abuse to find a few nuggets of useful feedback, and so that feedback is not acted on,' they clarified.",
      shor_content: "Paradox developers are tired of dealing with a culture...",
      image: "https://cdn.mos.cms.futurecdn.net/wNokiUX66RAEG8kSN94sCC-970-80.jpg.webp"
    },
    {
      id: "6",
      short_title: "Rainbow Six",
      title: "Notorious Rainbow Six Siege cheater suspected in November hostage hoax",
      content: "In November 2020, police responded to a report of a 'hostage taking' at Ubisoft Montreal. It ultimately proved to be a hoax—no actual threat was ever found—but it caused significant disruption and expense, as a large number of employees were trapped on the roof for hours while police cleared the building. Luckily, no one was physically hurt.The perpetrator of the hoax remains unknown at this point, but a report from La Presse says suspicion has fallen upon a French citizen named Yanni Ouahioune, a Rainbow Six Siege player who goes by the handle Y4nn0XX, and who has been banned repeatedly. (80 times, according to the report, which appears to be based on a claim Y4nn0XX makes.)He certainly appears to have a beef with Ubisoft: Videos on the Y4nN0xX YouTube channel include a message warning that he'll 'punish Rainbow Six Siege with cheats of hell,' and more recently, a musical number called the Yannoxware Fuck Ubisoft Rap. Last year, an account going by the same name also offered 'private and rage cheats' for Rainbow Six Siege on at least one cheaters forum. The newspaper says that Ouahioune admitted to attempting to steal the passwords of Siege players, and to involvement in a swatting incident that took place in 2017. He denied having any role in the November 2020 hoax, however, telling the site, 'I didn't do anything. I just cheated in their videogames. The only time I called Ubisoft was to insult them for banning me.' 'Normally, just for the buzz, I would have said that it was I who sent the police to Ubisoft, but hey, now the buzz is zero,' he said. 'If my name came out, it's because I'm known at Ubisoft.'Court documents obtained by La Presse revealed that two more false threats against Ubisoft Montreal followed the November hoax, one on December 18 in which a caller claimed to have placed a bomb near the building's daycare, and another on January 6, 2021, when a 911 call claimed that a group of hostage takers had kidnapped and executed a company executive. Those cases didn't attract the same level of public attention, as police took a 'more discreet' approach to investigating the claims before sending in large-scale forces.A third call, apparently placed on November 7 by the same person, more explicitly indicated that the perpetrator was someone looking to cause grief for Rainbow Six Siege specifically. After it was intercepted by Ubisoft's internal security, the caller threatened to 'continue to terrorize [Ubisoft] to death' and demanded Rainbow Six keys and the ability to impose bans on players. Ouahioune denied having a role in those calls as well.They also demanded that pro player Spoit, a member of Godsent, be permanently banned, which seems to form at least part of the basis for the connection to Ouahioune. Ubisoft's investigation allegedly found links between the perpetrator of the Montreal hoaxes and a prior hack of Spoit's account, which Ouahioune had previously bragged about carrying out. He told La Presse that he was only fronting to impress people, however—which fits with his statement that he normally would have laid claim to the bomb threat 'for the buzz'—and said that the effort blew up in his face when 'everyone found out that I hadn't hacked the account.'",
      shor_content: "The cheater, Yanni 'Y4nn0XX' Ouahioune, tells a Montreal newspaper...",
      image: "https://cdn.mos.cms.futurecdn.net/2Jw9LikGBknXTPy6g2FUhD-970-80.jpg.webp"
    },
    {
      id: "7",
      short_title: "Overwatch",
      title: "Overwatch gained 10 million players last year despite no new heroes or modes",
      content: "Despite being one of the biggest multiplayer games around, you don't hear that much about Overwatch nowadays. There's a good reason for that: Blizzard has been winding down development on the game for years as it's been working on Overwatch 2. A year ago, the studio announced that Echo would be the last new hero released in the game before the sequel comes out (a day that remains a far-off mystery). Since then, it has remained at a near-standstill: Seasonal events repeat as they have in years past and the only new stuff to speak of are hero skins and the occasional map. Surprisingly, the stagnant year didn't stop Overwatch's player base from growing. Speaking to Gamespot about his new role, Overwatch 2 director Aaron Keller revealed that the team-based shooter reached 60 million players as of 2021, 10 million more players than it had in late 2019. 'We have 60 million players that love that side of the game and are attached to [the PvP] side of the game. We know, going forward, we have to make the next best version of a team-based shooter.' As with any game, there are several factors to consider that may have contributed to those millions of new players: Blizzard may be counting every account created during its last free weekend, for instance. Some of those accounts might also be alternate smurf accounts created by longtime players. There was also a (very brief) period last year when Overwatch was given away on PC as part of an esports promotion, but that was shut down pretty quickly. Even with all of this in mind, it's probably safe to assume most of those 10 million are actual noobs.",
      shor_content: "Overwatch is in a holding pattern until the sequel, but its player...",
      image: "https://cdn.mos.cms.futurecdn.net/xtBw5XRNMh6hYfA6xcRqr9-970-80.jpg.webp"
    },
    {
      id: "8",
      short_title: "Riot will start",
      title: "Riot will start recording Valorant voice chat to root out toxic players",
      content: "Despite being one of the biggest multiplayer games around, you don't hear that much about Overwatch nowadays. There's a good reason for that: Blizzard has been winding down development on the game for years as it's been working on Overwatch 2. A year ago, the studio announced that Echo would be the last new hero released in the game before the sequel comes out (a day that remains a far-off mystery). Since then, it has remained at a near-standstill: Seasonal events repeat as they have in years past and the only new stuff to speak of are hero skins and the occasional map. Surprisingly, the stagnant year didn't stop Overwatch's player base from growing. Speaking to Gamespot about his new role, Overwatch 2 director Aaron Keller revealed that the team-based shooter reached 60 million players as of 2021, 10 million more players than it had in late 2019. 'We have 60 million players that love that side of the game and are attached to [the PvP] side of the game. We know, going forward, we have to make the next best version of a team-based shooter.'",
      shor_content: "Overwatch is in a holding pattern until the sequel, but its player...",
      image: "https://media.rawg.io/media/games/dfa/dfa0906773ebb8a50d15548ac5b8ee5e.jpg"
    },
    {
      id: "9",
      short_title: "Epic buys ArtStation",
      title: "Epic buys ArtStation, drops asset marketplace fee to 12%",
      content: "Epic Games has purchased ArtStation, a website that hosts artist portfolios with a focus on digital and videogame art. It's used by a large number of game and film artists, from amateurs to those at the top of their field: Recently featured artists include Anna Podedworna, who worked on Cyberpunk 2077, and Leticia Gillett, whose résumé includes Blizzard and Disney. The site also runs a marketplace for game assets and digital illustration resources, and as the first order of business, Epic has dropped ArtStation's standard marketplace fee from 30% to 12%, matching its Epic Games Store revenue cut. In a promotion tied to the acquisition, Epic has also made the lectures and tutorials in ArtStation's learning section free until the end of the year. That includes lectures from pros such as 'Visual Storytelling with Kevin Lima' (Disney director) and 'Equine Creature Design with Terryl Whitlatch' (Lucasfilm designer) as well as software tutorials and traditional media instruction. (I truly wish I'd had all of this when I was in art school.) ArtStation says it will operate as an 'independently branded platform owned by Epic Games' and that it won't be retooled to, for example, focus entirely on the Unreal Engine. 'You can still use the platform as you do today, and we will continue to be open to all creators across verticals, both 2D and 3D alike—including those that don’t use Unreal Engine,' said ArtStation CEO Leonard Teo in a blog post. 'We’ll be actively hiring and growing the ArtStation team. We're committed to improving the platform and now as a part of Epic, we’ll be able to do much more.' Teo also noted that Epic gave ArtStation a grant in 2020 'which helped immensely during an uncertain period.' The price of this year's acquisition was not disclosed. For ArtStation's Pro members (which costs $10 a month), the marketplace fee drops all the way to 8%, and down to 5% for sellers who do their own promotion. The marketplace is used to sell game assets such as 3D models and textures, reference photos, tools such as brushes to use in illustration software, as well as art prints and books. Since 2018, Epic has said repeatedly that the once standard 30% platform fee—which is Steam's cut for most games—is too high, and that 12% is a fairer number. A recent survey of developers found that they agree: only 6% felt that Steam's 30% cut is justified today.",
      shor_content: "The artist portfolio and resource site is now part...",
      image: "https://cdn.mos.cms.futurecdn.net/dyYPKfpxwXkC2aTtrtDwCg-970-80.jpg"
    },
    {
      id: "10",
      short_title: "Scavengers",
      title: "Scavengers 'exhausted' its supply of Steam keys on first day of Early Access",
      content: "Scavengers, the hybrid battle royale from Midwinter Entertainment, arrived in Early Access on Wednesday. Well, sort of. Claiming a key to the free-to-play team-based shooter required players to watch 30 minutes of the game streaming on Twitch, then claim a key in a Twitch drop. But the process didn't go entirely smoothly. In a post on Steam, creative director Josh Holmes detailed the first day of Scavengers in Early Access, explaining why some Twitch viewers didn't get a key even though they'd claimed their drop, and why others received a key to the Epic Store version of the game instead of the Steam version. First off: if you claimed a Twitch drop but didn't receive your key (or received an email with no key attached), Midwinter says it re-sent everyone who claimed a key a second email. If your key was attached to your first email, you don't need to do anything. If you got an email with no key, check your inbox again and hopefully you'll see it now. As for those wondering why they got an Epic Store key instead of a Steam key: 'We’re burning through Early Access keys at a crazy rate, and some of you may have noticed that we switched at some point from giving away Scavengers Steam keys to Epic Game Store keys,' Holmes wrote. 'At this moment, we’ve exhausted our cache of Steam keys, but have been able to secure enough Epic Games Store keys to keep up.' Why not just open up the game properly in Early Access and let everyone play without having to secure a key through a Twitch drop? Mostly due to concerns about server stability, said Holmes, which makes sense. We've all seen games get flooded with tens of thousands of players on day one, causing massive server problems that can render them unplayable. Thing is, even with the Twitch drop scheme acting as a buffer to players jumping into the game en masse, Scavengers still had server issues. As a temporary solution to server crashes, the lobbies were split into 'shards' which had the unfortunate side-effect that friends wound up in different shards and sometimes couldn't be invited into each others' parties.",
      shor_content: "It was just one of several issues as the team-based shooter entered...",
      image: "https://cdn.mos.cms.futurecdn.net/jYHVRR3yeB3pnbu93g7SwY-1024-80.jpg.webp"
    },
    {
      id: "11",
      short_title: "Scavengers",
      title: "Scavengers 'exhausted' its supply of Steam keys on first day of Early Access",
      content: "It's been a long time since Minesweeper came bundled with Windows. While the original will always be a classic, perhaps someone felt the grid-clicker was feeling a little dated. Perhaps it's long past time someone updated Minesweeper as a first-person shooter. Mine Shaft by Krzyhau does exactly that, replacing Minesweeper's flat grid with a Minecraft-style series of caverns, clogged up by those nerve-wracking numbered grey blocks. You know the drill. Click a bomb, and you're out. With that one change, Minesweeper suddenly becomes a terrifying navigational challenge. It's not enough just to avoid clicking bombs—you have to try and carve a path through an explosive labyrinth. It also makes it much harder to keep track of where potential traps might lie, urging a more methodical approach. Dive right in, and you'll quickly find yourself losing track of how deep the bombs might lie. The short game was created as part of last weekend's Ludum Dare 48 game jam. If the developer's name sounds familiar, it's because Krzyhau is also the architect behind those utterly cursed Portal 2 chambers. Fortunately, Mine Shaft isn't quite as absurd as those broken maps. Mine Shaft is free to play in your browser over on Itch.",
      shor_content: "Mine Shaft reinvents the built-in Windows classic as a surprisingly...",
      image: "https://www.mining-technology.com/wp-content/uploads/sites/8/2021/03/1.jpg"
    },
    {
      id: "12",
      short_title: "Cyberpunk 2077",
      title: "Cyberpunk 2077's rough launch didn't stop CD Projekt execs taking massive bonuses",
      content: "CD Projekt Red executives will still be walking away with millions of dollars in bonuses, despite a rough Cyberpunk 2077 launch that saw the game riddled with bugs and removed from console storefronts. That's according to the latest newsletter from Bloomberg's Jason Schreier, who revealed that five of CDPR's board members are set to earn combined bonuses of $28 million—with co-CEOS Marcin Iwiński and Adam Kiciński receiving $6.3 million (24 million zloty) each. In comparison, employee sources told Bloomberg they'd received anywhere from $5,000 to $20,000, depending on seniority. Those figures track with CDPR's annual financial report, which estimates the company brought in $562 million last year. That's a 500% increase over the previous year, with Cyberpunk selling over 13.7 million copies. But employees told Bloomberg they were expecting more, and may have gotten more if the game had been delayed to fix the countless known issues plaguing the game. That CD Projekt's very bad week following the CP2077 launch doesn't seem to have affected big bonuses for its board members isn't a great look. In an investor call last week, Kiciński was asked whether it was appropriate for executives to still take these huge bonuses—the co-CEO responding that its bonuses had always been tied to profits.",
      shor_content: "CD Projekt Red's co-CEOs stand to receive $6.3 million each...",
      image: "https://cdn.mos.cms.futurecdn.net/ha9qoisJcPtV58RprrgaBX-970-80.jpg.webp"
    },
  ]

  return (
    <div>
      <header>
        <Navbar />
      </header>
        <main>
          <Route path="/" exact>
            <div className="nav-img mb-3 ">
              <div className="opacity">
                <div className="slider-text">
                  <h1 className="text-center light">Greetings to all!</h1>
                </div>
              </div>
            </div>
            <div className="container card-con border shadow-sm content">
              <div className="row mt-3">
                <Cards news={news} />
            </div>
            </div>
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contacts" exact>
            <Contacts />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/items/:id" exact>
            <div>
              <Detail news={news} />
            </div>
          </Route>
        </main>
    </div >
  );
};

export default App;