import type { Struct, Schema } from '@strapi/strapi';

export interface PlatformSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_platform_social_links';
  info: {
    displayName: 'social links';
    icon: 'book';
    description: '';
  };
  attributes: {
    platform: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Github'>;
    link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://github.com'>;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
    icon: 'search';
    description: '';
  };
  attributes: {
    skillType: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Programming languages'>;
    skillNames: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'C, C++, Java, Python, JavaScript, TypeScript'>;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'project';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Project Title'>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'<ul>   <li>     Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit.   </li>   <li>     Nulla non tortor ac nibh dignissim egestas nec a <b>magna</b>. Etiam     bibendum <b>purus non justo</b> elementum egestas.   </li>   <li>     Vestibulum pharetra <b>orci quis sapien</b> convallis, vel pellentesque     lorem hendrerit. <b>Morbi</b> et lacus lectus. Nam vehicula a erat id     efficitur.   </li>   <li>     Curabitur volutpat erat id magna porttitor ultrices. Cras consequat, orci in     lacinia malesuada, nibh eros interdum massa, ut venenatis ante felis tempus     erat. Proin a dolor quis libero convallis posuere. Mauris id est cursus,     porta risus in, pulvinar augue. In vel viverra ligula.   </li> </ul>;'>;
    techStack: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'JavaScript, TypeScript, ReactJS'>;
    links: Schema.Attribute.Component<'links.links', true>;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Company Name'>;
    companyName: Schema.Attribute.String;
    location: Schema.Attribute.String;
    workSummary: Schema.Attribute.RichText;
    startDate: Schema.Attribute.Date;
    endDate: Schema.Attribute.Date;
  };
}

export interface LinksLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'links';
    description: '';
  };
  attributes: {
    link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://github.com'>;
    placeholder: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Github'>;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
    icon: 'book';
    description: '';
  };
  attributes: {
    universityName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'University Name'>;
    description: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'gpa-8.91'>;
    major: Schema.Attribute.String & Schema.Attribute.DefaultTo<'B.Tech'>;
    degree: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI & Data Science'>;
    startDate: Schema.Attribute.Date;
    endDate: Schema.Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'platform.social-links': PlatformSocialLinks;
      'skills.skills': SkillsSkills;
      'project.project': ProjectProject;
      'experience.experience': ExperienceExperience;
      'links.links': LinksLinks;
      'education.education': EducationEducation;
    }
  }
}
