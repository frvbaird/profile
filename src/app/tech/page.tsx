import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Dev Tools & Technologies',
  description: 'Software building technologies I use, I love, and other things I recommend.',
}

export default function Tech() {
  return (
    <SimpleLayout
      title="Software building/hosting technologies I use, I love, and otherwise recommend."
      intro="I get asked a lot about the things I use to build software, stay productive (ie distract myself from buying more guitars). Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Persistence/DB">
          <Tool title="Storage">
            I have extensive experience with designing/normalizing relational databases
             (MySql,PostgreSql,MariaDB) including transactional SQL. On the flip side I have also worked with NoSql (MongoDB) integrating Laravel with MongoDB. 
             Additionally I am certified as a FileMaker Developer.
          </Tool>
        </ToolsSection>
        <ToolsSection title="API">
          <Tool title="APIs Implementation">
            Stripe, Authorize.net,Google Workplace,Google Maps,Twilio, ReCaptcha, hCaptcha, PointClickCare,HelloSign, Clever,and many more! 
          </Tool>
          <Tool title="APIs I've built">
            I have built a few APIs using Laravel on the backend. Where I have used Laravel Passport for authentication and have implemented various API endpoints for CRUD operations.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Frontend Development">
          <Tool title="Frontend Experience">
            I have over 12 years experience with front ent development where I have worked with HTML, CSS, JavaScript, jQuery, Vue ( versions 2 and 3 (TS ) VueRouter, VueX,
             Pinia,Option AIP,Composition API), Bootstrap, Tailwind CSS, Node.js, and 
            this particular site is built with React and Typescript....... Where has typescript been all my life?!
          </Tool>
        </ToolsSection>
        <ToolsSection title="Backend Development">
          <Tool title="Laravel Framework">
          Within the Laravel ecosystem l I have worked with the following: Horizon,Sail,Sanctum,Jetstream,Breeze,Cashier,Socialite,Nova and Forge.
          Likewise within the framework I have extensive experience with Eloquent ORM,Database Query, Artisan, Artisan Commands, Routing, Middleware, 
          API, Redis, Storage, UnitTesting,Blade,Authentication,Broadcasting, and Authorization. I'm sure I'm missing a few things but you get the idea.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Architecture">
          <Tool title="Architectures I've worked with">
           Monolith,SPA,and Microservices. Microservices are fun, I like microservices :)  
          </Tool>
        </ToolsSection>
        <ToolsSection title="Hosting">
          <Tool title="Platforms">
            I have worked with AWS, Google Cloud, Digital Ocean, Azure, and remember a way, way long time ago when folks had servers on prem (yo, I did that too)?!
          </Tool>
        </ToolsSection>
        <ToolsSection title="Webservers">
          <Tool title="Flavors">
            Nginx,Apache2,Apache Tomcat,FileMaker Server
          </Tool>
        </ToolsSection>
        <ToolsSection title="Local">
          <Tool title="Setups">
            Composer, Docker, Sail, Herd, Vagrant, (paradoxically) remote ‘local’ instances on both AWS/GCP and god help us all when your local had to be setup with out the likes of containers.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Operating Systems">
          <Tool title="">
            Linux (Ubuntu,CentOS),Unix,Mac,Windows
          </Tool>
        </ToolsSection>
        <ToolsSection title="Programming Languages">
          <Tool title="">
          I have primarily worked with PHP, JavaScript, HTML, CSS, Vue and MySql and most recently TypeScript. 
          Additionally I have dabbled lightly in Python,Java,Objective-C,C, and .Net. In a nutshell I pick up any language very quickly.. For example I am building this site in React,
          which I have limited professional experience with, but wanted to get my feet wet. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="IDE">
          <Tool title="Flava-Flave">
            PHPStorm, VSCode, Sublime Text, Netbeans
          </Tool>
        </ToolsSection>
        <ToolsSection title="Version Control">
          <Tool title="Flavors and Repos">
              Git, Bitbucket, Github, Gitlab,Azure DevOps, and remember when we used to use SVN?!
          </Tool>
        </ToolsSection>
        <ToolsSection title="Methodologies and Tools">
          <Tool title="Flavors and Repos">
              Agile, Scrum, Waterfall, Kanban, Jira, Gitlab, Asana!
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
