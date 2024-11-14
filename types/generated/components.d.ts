import type { Schema, Struct } from '@strapi/strapi';

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    description: '';
    displayName: 'education';
    icon: 'book';
  };
  attributes: {
    degree: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI & Data Science'>;
    description: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'gpa-8.91'>;
    endDate: Schema.Attribute.Date;
    major: Schema.Attribute.String & Schema.Attribute.DefaultTo<'B.Tech'>;
    startDate: Schema.Attribute.Date;
    universityName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'University Name'>;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    description: '';
    displayName: 'experience';
    icon: 'briefcase';
  };
  attributes: {
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.Date;
    location: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Company Name'>;
    workSummary: Schema.Attribute.RichText;
  };
}

export interface LinksLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'links';
  };
  attributes: {
    link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://github.com'>;
    placeholder: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Github'>;
  };
}

export interface PlatformSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_platform_social_links';
  info: {
    description: '';
    displayName: 'social links';
    icon: 'book';
  };
  attributes: {
    link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://github.com'>;
    platform: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Github'>;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    description: '';
    displayName: 'project';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'<ul>   <li>     Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.   </li>   <li>     Nulla non tortor ac nibh dignissim egestas nec a <b>magna</b>. Etiam     bibendum <b>purus non justo</b> elementum egestas.   </li>   <li>     Vestibulum pharetra <b>orci quis sapien</b> convallis, vel pellentesque     lorem hendrerit. <b>Morbi</b> et lacus lectus. Nam vehicula a erat id     efficitur.   </li>   <li>     Curabitur volutpat erat id magna porttitor ultrices. Cras consequat, orci in     lacinia malesuada, nibh eros interdum massa, ut venenatis ante felis tempus     erat. Proin a dolor quis libero convallis posuere. Mauris id est cursus,     porta risus in, pulvinar augue. In vel viverra ligula.   </li> </ul>;'>;
    links: Schema.Attribute.Component<'links.links', true>;
    techStack: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'JavaScript, TypeScript, ReactJS'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Project Title'>;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    description: '';
    displayName: 'skills';
    icon: 'search';
  };
  attributes: {
    skillNames: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'C, C++, Java, Python, JavaScript, TypeScript'>;
    skillType: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Programming languages'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'links.links': LinksLinks;
      'platform.social-links': PlatformSocialLinks;
      'project.project': ProjectProject;
      'skills.skills': SkillsSkills;
    }
  }
}
