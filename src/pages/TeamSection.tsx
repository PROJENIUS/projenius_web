import React, { useEffect } from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './TeamSection.css';
declare function require(path: string): any;


const teamMembers = [
  {
    id: 'TM1',
    name: 'Karthick Ganesh M',
    role: 'Founder & CEO',
    quote: 'The dreamer who turned "what if" into "what’s next."',
    icons: [
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
    ],
    image: require('../img/Karthiganesh.jpeg'),
  },
  {
    id: 'TM2',
    name: 'Harshini M',
    role: 'Co-Founder & Embedded Engineer',
    quote: 'The brain behind the machines you never see but can’t live without',
    icons: [
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
    ],
    image: require('../img/Harshini.jpeg'),
  },
  {
    id: 'TM3',
    name: 'Madhumithaa U',
    role: 'ML Engineer',
    quote: 'Teaching machines to think smarter than ever before.',
    icons: [
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
    ],
    image: require('../img/Madhumithaa.jpeg'),
  },
  {
    id: 'TM4',
    name: 'Kanimozhi B',
    role: 'IoT Engineer',
    quote: 'Making everyday objects talk, think, and act intelligently.',
    icons: [
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
    ],
    image: require('../img/Kanimozhi.jpeg'),
  },
  {
    id: 'TM5',
    name: 'Hariharan S',
    role: 'Web Developer',
    quote: 'Coding the internet, one pixel-perfect page at a time — flawlessly.',
    icons: [
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
    ],
    image: require('../img/Hariharan.jpeg'),
  },
  {
    id: 'TM6',
    name: 'Abhinanda V',
    role: 'App Developer',
    quote: 'Crafting apps that fit in your palm but power your world.',
    icons: [
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
    ],
    image: require('../img/Abhinanda.jpeg'),
  },
  {
    id: 'TM7',
    name: 'Harini P',
    role: 'UI/UX Developer',
    quote: 'Designing meaningful experiences, not just screens to scroll.',
    icons: [
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
    ],
    image: require('../img/Harini.jpg'),
  },
  {
    id: 'TM8',
    name: 'Abinaya',
    role: 'Data Analyst',
    quote: 'Finding stories in spreadsheets and uncovering truth in trends.',
    icons: [
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
    ],
    image: require('../img/Abinaya.jpeg'),
  },
  {
    id: 'TM9',
    name: 'Balaji J',
    role: 'Video Editor',
    quote: 'Turning clips into captivating stories, frame by frame.',
    icons: [
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
    ],
    image: require('../img/Balaji.jpeg'),
  },
];

const scrollingTeam = [...teamMembers, ...teamMembers];

const TeamSection = () => {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', disableRightClick);
    return () => document.removeEventListener('contextmenu', disableRightClick);
  }, []);

  return (
    <section className="team-section">
      <h2 className="section-title">Meet the ProJenius Team</h2>
      <div className="scrolling-wrapper">
        <div className="team-scroll-track">
          {scrollingTeam.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-avatar">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable={false}
                    style={{ userSelect: 'none', pointerEvents: 'none' }}
                  />
                ) : (
                  member.id
                )}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-quote">"{member.quote}"</p>
              <div className="team-icons">
                {member.icons.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;