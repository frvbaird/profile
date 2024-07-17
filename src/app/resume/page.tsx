import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ResumeSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  date,
  employer,
  cta,
  href,
}: {
  title: string
  description: string
  date: string
  employer?: string
  cta?: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={`/tech`}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{employer}</Card.Eyebrow>
      <Card.Subtitle as="h3">{date}</Card.Subtitle>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Resume',
  description:'Frank Baird | Cincinnati, OH',
}

export default function Resume() {
  return (
    <SimpleLayout
      title="Resume"
      intro="Frank Baird | Cincinnati, OH"
    >
      <div className="space-y-20">
        <ResumeSection title="Work Experience">
          <Appearance
            href="#"
            title="Senior Full Stack Software Engineer"
            description="I’m Currently working independently on various projects focused primarily on LEMP/LAMP with Laravel and Vue (TypeScript/JavaScript) and Tailwind. I have also sprinkled in a bit of CI/CD where I manage pipelines and deployment. I work in a variety of industries, but not limited to Healthcare, Insurance, eCommerce, Pre-press,Graphic Design,HVAC,and  Education. While I am focused on Software Engineering / Full Stack Development I also have a long history in Systems Engineering as well. Below are some of the technologies I work with. "
            employer='Baird Information Technology Solutions (BITS) | Cincinnati, OH'
            date="October 2023 to Present"
            cta="View details"
          />
          <Appearance
            href="#"
            title="Senior Full Stack Software Engineer"
            employer="Robert Half | Tampa, FL (remote)"
            description="My primary focus was to contribute to building features for a full stack SasS application in Laravel which also included a mobile app. Third party solutions leverages a microservices architecture with LEMP (Laravel) (MongoDB) stack on AWS with a mix of Laravel, Blade, Horizon,Redis, JS (jQuery), Bootstrap, and CSS on the frontend."
            date="March 2021 to January 2023 "
         
          />
            <Appearance
            href="#"
            title="Lead Full Stack Developer"
            employer='VGM FORBIN | Waterloo, IA (remote)'
            description="I was previously a lead developer for the custom build team. My primary focus was building full stack greenfield applications in Vue/Laravel. In this role I have built solutions that interface with various API’s. My expertise is certainly on the backend however I am very well experienced in Vue. Continuing I have built and maintained custom APIs for clients. We use a LEMP (Laravel) stack on GCP with a mix of Laravel blade,Vue.js, Bootstrap, and CSS on the frontend."
            date="March 2021 to January 2023"
           
          />
          <Appearance
            href="#"
            title="CIO / Software Architect"
            employer="Soshemo | Cincinnati, OH (remote)"
            description="This is/was a passion project together with two other partners. Soshemo is a reporting and communication  tool for at-risk kids who may have social emotional issues where inter-district personnel can share information with the intent of getting resources to those students in need. Too often students move from grade to grade where there is a disconnect from teacher to teacher and school to school, particularly for transient families and social emotionally challenged  kids, Soshemo aims to mitigate these at-risk kids by creating a reporting and commutation portal where staff can track the success of these challenged students. In this role I acted as the Software Architect where I designed, built, and deployed everything from the code to the cloud. This was a LAMP stack project with vanilla php."
            date="October 2018 -"
          />
          <Appearance
            href="#"
            title="Lead PHP Developer"
            employer="BlueSky Creative | Cincinnati, OH (remote)"
            description="While working at BlueSky I had my hands in many project development phases including software engineering, project management and of course PHP development. Primarily, I developed various marketing and survey solutions for our customers. Additionally, I provisioned, and maintained cloud instances (AWS) while also handling domain procurement and control (DNS,SSL). I also had the opportunity to be the lead software engineer on key projects overseeing a team of developers and infrastructure personnel using an Agile methodology. Most of the solutions at BlueSky were built on a LEMP or LAMP stack using the Laravel framework (PHP) with a mix of a Laravel blade, Vue.js, Bootstrap, and Tailwind CSS on the frontend."
            date="October 2018 to June 2020 and September 2023 to March 2024"
          />
           <Appearance
            href="#"
            title="IT Director"
            employer="HCC | Cincinnati, OH "
            description="I worked as the Technology Director for the Reading Community City School District. I was responsible for all technology decisions, maintenance, and improvements throughout the district. 
            The scope of my responsibility included all hardware and software components related to the IT infrastructure in the district including DBA, help desk, telephony, network, switches, servers, computers, copiers, cameras, intrusion detection and mobile devices (MDM). In addition, I was the GSuite & Active Directory administrator and the lead software engineer and developer. I developed and maintained a SaaS MDM inventory and user management system I call TAUM (Technology Asset User Management, or phonetically “Tom”) using a LAMP stack. In addition to device inventory management this tool allowed me to automate tasks such as user account creation/suspension/deletion with user/device association. This solution incorporates key functionality that assigns, checks in/out end user devices while keeping detailed records of device break/fix incidents or accidents. 
            This project was built from scratch using LAMP with vanilla OO PHP and follows an MVC structure using APIs including Google OAuth/Directory API and Clever."
            date="January 2012 to June 2020 "
          />
        </ResumeSection>
        <ResumeSection title="Education">
          <Appearance
            href="#"
            title="Bachelors of Science in Information Systems/Software Engineering"
            description="3.87 GPA"
            employer="University of Phoenix| Phoenix, AZ (remote)"
            date="March 2008 - November 2011"
          />
          <Appearance
            href="#"
            title="Certified FileMaker Developer"
            description="Certification"
            employer="Soliant Consulting | Chicago, IL"
            date="2010"
          />
          <Appearance
            href="#"
            title="Machine Learning Specialization"
            description=""
            employer="Stanford | DeepLearning.AI | (Coursera | Online)"
            date="(Currently Enrolled)"
           
          />
        </ResumeSection>
      </div>
    </SimpleLayout>
  )
}
