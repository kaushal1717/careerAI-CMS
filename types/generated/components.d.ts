import type { Struct, Schema } from '@strapi/strapi';

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
    icon: 'search';
  };
  attributes: {
    skillType: Schema.Attribute.String;
    skillNames: Schema.Attribute.String;
  };
}

export interface PlatformSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_platform_social_links';
  info: {
    displayName: 'social links';
    icon: 'book';
  };
  attributes: {
    platform: Schema.Attribute.String;
    link: Schema.Attribute.String;
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
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    location: Schema.Attribute.String;
    workSummary: Schema.Attribute.RichText;
    startDate: Schema.Attribute.Date;
    endDate: Schema.Attribute.Date;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
    icon: 'book';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    major: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    endDate: Schema.Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'skills.skills': SkillsSkills;
      'platform.social-links': PlatformSocialLinks;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
    }
  }
}
