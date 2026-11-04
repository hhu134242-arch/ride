import React from 'react';
import { Text, View } from 'react-native';
import { Action, Card, ScreenShell } from '../components/ScreenShell';
const items:Record<string,[string,string][]>={
'Location':[['Pickup location','Use current location'],['Drop off','Choose destination']],
'Select destination':[['Search destination','Enter address'],['Recent places','Home · Work · Airport']],
'Car Details':[['Premium · Car','$5/km · 4 min away'],['Vehicle features','Air conditioning · 4 seats'],['Driver','Verified partner']],
'Map track':[['Your ride is on the way','Driver arriving in 4 min'],['Trip details','6 KM · Premium car']],
'Payment Method':[['Visa •••• 4242','Default payment'],['Add payment method','Credit or debit card']],
'My Trips':[['Upcoming trip','Today · 10:30 AM'],['Past trips','View ride history']],
'Setting':[['Personal information','Name, phone and email'],['Notification settings','Manage alerts'],['Saved places','Home and work']],
'Notification':[['Ride confirmed','Your driver is on the way'],['Payment received','Your receipt is ready']],
'Message List':[['Alex Morgan','I am at the pickup point'],['Ride support','How can we help?']],
'Message':[['Alex Morgan','Driver · Online'],['Hello! I am waiting by the main entrance.','10:24 AM']],
'Saved Places':[['Home','12 Oak Street'],['Work','Central Business District'],['Add a place','Save an address']],
'Profile page':[['Personal details','Edit profile'],['Driver license','Verified'],['Payment methods','Manage cards']],
'Success page':[['Ride booked successfully','Your driver will arrive shortly'],['Trip details','View your ride']],
'Review':[['How was your ride?','Rate your driver and trip'],['Leave a comment','Share your feedback']],
'Home page':[['Where are you going?','Search a destination'],['Nearby rides','Browse available cars'],['Your next trip','View trip details']],
'Car list':[['Premium · Car','$5/km · 4 seats'],['Economy · Car','$3/km · 4 seats'],['SUV · Car','$7/km · 6 seats']],
'Scan page':[['Scan your driver license','Align the license inside the frame']],
'Driver license':[['First name','As shown on your license'],['Last name','As shown on your license'],['License number','Enter license number'],['Expiration date','MM / YYYY'],['Date of birth','DD / MM / YYYY']],
'Splash page V. 02':[['RIDSHARE','Ride together, go further']],
'Splash page V. 3':[['RIDSHARE','Your ride, your way']]
};
const descriptions:Record<string,string>={Location:'Set your pickup and drop off points', 'Select destination':'Choose where you want to go','Car Details':'Review your ride before booking','Map track':'Live trip status','Payment Method':'Choose how to pay','My Trips':'Your ride activity','Setting':'Account preferences','Notification':'Your latest updates','Message List':'Conversations','Message':'Ride conversation','Saved Places':'Quick access to your places','Profile page':'Manage your account','Success page':'All set','Review':'Share your experience','Home page':'Book a ride','Car list':'Choose a vehicle','Scan page':'Identity verification','Driver license':'Verify your driving details'};
export function DesignScreen({name,onBack,onNavigate}:{name:string;onBack:()=>void;onNavigate:(to:string)=>void}){const rows=items[name]??items['Home page'];const next=name==='Location'?'Select destination':name==='Select destination'?'Car list':name==='Car list'?'Car Details':name==='Car Details'?'Payment Method':name==='Payment Method'?'Success page':name==='Success page'?'Home page':name==='Home page'?'Location':name==='Scan page'?'Driver license':name==='Driver license'?'Success page':'Home page';return <ScreenShell title={name} subtitle={descriptions[name]} onBack={onBack}><View style={{height:160,borderRadius:18,backgroundColor:name.includes('Map')||name==='Location'?'#e7f0e8':'#eff8f1',alignItems:'center',justifyContent:'center',marginBottom:6}}><Text style={{fontSize:48}}>{name.includes('Map')||name==='Location'?'📍':name==='Car list'||name==='Car Details'?'🚘':name==='Payment Method'?'💳':name.includes('Message')?'💬':name==='Review'?'⭐':name==='Scan page'?'▦':'🚗'}</Text><Text style={{color:'#667080',marginTop:8}}>{name.includes('Map')||name==='Location'?'Map preview':name}</Text></View>{rows.map(([title,detail],i)=><Card key={title} title={title} detail={detail} icon={name==='Payment Method'?'$':name.includes('Message')?'✉':name==='Review'?'★':'•'} onPress={()=>onNavigate(next)}/>)}<Action title={name==='Car Details'?'Book ride':name==='Review'?'Submit review':name==='Scan page'?'Open license form':name==='Driver license'?'Save details':name==='Message'?'Send message':name==='Home page'?'Book a ride':`Continue`} onPress={()=>onNavigate(next)}/></ScreenShell>}
