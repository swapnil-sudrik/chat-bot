// import React from "react";
// import ChatBot from 'react-simple-chatbot';
// import { Segment } from "semantic-ui-react";

// const MyBot = () => {




//     return (
//         <>
//             <Segment floated="right">
//             <ChatBot steps={steps}/>
//             </Segment>
//         </>
//     )
// }

// export default MyBot;
//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import logo from '../sciastra.png';



    const steps = [
        {
            id:'greet',
            message:'👋 Welcome to SciAstra! How can I help you today?',
            trigger:'options'
        },
        {
            id:'options',
            options:[
                {
                    value:'About SciAstra',
                    label:'About SciAstra',
                    trigger:'About SciAstra'
                },
                {
                    value:'Courses',
                    label:'Courses',
                    trigger:'Courses'
                },
                {
                    value:'Resources',
                    label:'Resources',
                    trigger:'Resources'
                },
                {
                    value:'Support',
                    label:'Support',
                    trigger:'Support'
                }
            ],
            // trigger:'opt'
        },
        {
            id:'About SciAstra',
            message:'SciAstra is an online learning platform for science learners. It offers courses for the IISER Aptitude Test (IAT), National Entrance Screening Test (NEST), ISI, CMI, and IACS.',
            trigger:'options'
        },
        {
            id:'Courses',
            message:'ISI & CMI 2024 Preparation Guide',
            trigger:'c2'
        },
        {
            id:'c2',
            message:'IAT 2024 Preparation Guide',
           trigger:'c3'
        },
        {
            id:'c3',
            message:'NEST 2024 Preparation Guide',
            trigger:'options'
        },
        {
            id:'Resources',
            message:'visit to this site: www.sciastra.com/blog/',
            trigger:'options'  
        },
        {
            id:'Support',
            message:'send mail to support@sciastra.com',
            trigger:'options'
        },
        {
            id:'Angular',
            message:'Thanks for telling your Angular issue',
            end:true
        }

    ]
// Creating our own theme
const theme = {
	background: '#f3ffe1',
	headerBgColor: '#33658a',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: logo,
	floating: true,
};

function MyBot() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<ChatBot
					headerTitle="SciAstra Bot"
					steps={steps}
					{...config}
                    style={{zIndex:1}}
				/>
			</ThemeProvider>
		</div>
	);
}

export default MyBot;
