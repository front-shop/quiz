export interface IAboutInfo {
  id: number;
  title: string;
  text: string;
}

export const AboutInfo: IAboutInfo[] = [
  {
    id: 1,
    title: 'Our Mission',
    text: `Our mission is simple yet powerful: to make learning technology fun, engaging,
    and accessible to everyone. We believe that knowledge is the key to empowerment,
    and what better way to gain knowledge than through interactive quizzes?`
  },
  {
    id: 2,
    title: 'Who We Are',
    text: ` We are a team of dedicated frontend developers and tech enthusiasts who are
    committed to providing you with the best online quiz experience.
    Our team includes experts in various fields of technology,
    ensuring that our quizzes are not only educational but also up-to-date with
    the latest industry trends.`
  },
  {
    id: 3,
    title: 'What We Offer',
    text: ` We are a team of dedicated frontend developers and tech enthusiasts who are
    committed to providing you with the best online quiz experience.
    Our team includes experts in various fields of technology,
    ensuring that our quizzes are not only educational but also up-to-date with
    the latest industry trends.`
  },
  {
    id: 4,
    title: 'Contact Us',
    text: `Have a question, suggestion, or feedback? We/\`/d love to hear
    from you! Feel free to contact us anytime.
    
    Thank you for choosing QUIZ as your go-to platform for technical quizzes.
    We look forward to being a part of your learning journey and helping you expand your
    tech knowledge in a fun and interactive way.`
  }
];

export default AboutInfo;
