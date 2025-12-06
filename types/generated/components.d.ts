import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    aboutCTA: Schema.Attribute.Component<'elements.link', false>;
    content: Schema.Attribute.RichText;
    experience: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksContactBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_blocks';
  info: {
    displayName: 'Contact Block';
  };
  attributes: {
    ContactDetails: Schema.Attribute.Component<'elements.get-in-touch', false>;
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    SocialLinks: Schema.Attribute.Component<'elements.social-links', false>;
  };
}

export interface BlocksCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_sections';
  info: {
    displayName: 'Cta Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_sections';
  info: {
    displayName: 'Faq Section';
  };
  attributes: {
    faq: Schema.Attribute.Component<'elements.faq', true>;
    headline: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFormBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_form_blocks';
  info: {
    displayName: 'Form Block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    InputFields: Schema.Attribute.Component<'elements.input', true>;
    SubTitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    subTitle: Schema.Attribute.String;
  };
}

export interface BlocksMissionVisionBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_mission_vision_blocks';
  info: {
    displayName: 'Mission Vision Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksOurStoryBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_story_blocks';
  info: {
    displayName: 'Our Story Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksOurValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_values_sections';
  info: {
    displayName: 'Our Values Section';
  };
  attributes: {
    headline: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_page_hero_sections';
  info: {
    displayName: 'Page Hero Section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksPolicyBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_policy_blocks';
  info: {
    displayName: 'Policy Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface BlocksServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    headline: Schema.Attribute.String;
    services: Schema.Attribute.Component<'elements.service', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSliderBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_slider_blocks';
  info: {
    displayName: 'Slider Block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    logos: Schema.Attribute.Media<'images', true>;
  };
}

export interface BlocksStatsBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats_blocks';
  info: {
    displayName: 'Stats Block';
  };
  attributes: {
    clients: Schema.Attribute.String;
    experience: Schema.Attribute.String;
    team: Schema.Attribute.String;
  };
}

export interface BlocksTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_sections';
  info: {
    displayName: 'Team Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    teams: Schema.Attribute.Component<'elements.members', true>;
  };
}

export interface BlocksTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    headline: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    testimonial: Schema.Attribute.Component<'elements.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksWhyChooseSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_choose_sections';
  info: {
    displayName: 'Why Choose Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    headline: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whyChoose: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFaq extends Struct.ComponentSchema {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    ans: Schema.Attribute.Text;
    ques: Schema.Attribute.String;
  };
}

export interface ElementsGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_elements_get_in_touches';
  info: {
    displayName: 'Get In Touch';
  };
  attributes: {
    adress: Schema.Attribute.Text;
    call: Schema.Attribute.BigInteger;
    email: Schema.Attribute.String;
  };
}

export interface ElementsInput extends Struct.ComponentSchema {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    InputName: Schema.Attribute.String;
    Placeholder: Schema.Attribute.Text;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsMembers extends Struct.ComponentSchema {
  collectionName: 'components_elements_members';
  info: {
    displayName: 'Members';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface ElementsService extends Struct.ComponentSchema {
  collectionName: 'components_elements_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkdin: Schema.Attribute.String;
    pinterest: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    review: Schema.Attribute.Text;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contact: Schema.Attribute.Component<'elements.get-in-touch', false>;
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
    policyLinks: Schema.Attribute.Component<'elements.link', true>;
    social: Schema.Attribute.Component<'elements.social-links', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-section': BlocksAboutSection;
      'blocks.contact-block': BlocksContactBlock;
      'blocks.cta-section': BlocksCtaSection;
      'blocks.faq-section': BlocksFaqSection;
      'blocks.form-block': BlocksFormBlock;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.mission-vision-block': BlocksMissionVisionBlock;
      'blocks.our-story-block': BlocksOurStoryBlock;
      'blocks.our-values-section': BlocksOurValuesSection;
      'blocks.page-hero-section': BlocksPageHeroSection;
      'blocks.policy-block': BlocksPolicyBlock;
      'blocks.service-section': BlocksServiceSection;
      'blocks.slider-block': BlocksSliderBlock;
      'blocks.stats-block': BlocksStatsBlock;
      'blocks.team-section': BlocksTeamSection;
      'blocks.testimonial-section': BlocksTestimonialSection;
      'blocks.why-choose-section': BlocksWhyChooseSection;
      'elements.card': ElementsCard;
      'elements.faq': ElementsFaq;
      'elements.get-in-touch': ElementsGetInTouch;
      'elements.input': ElementsInput;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.members': ElementsMembers;
      'elements.service': ElementsService;
      'elements.social-links': ElementsSocialLinks;
      'elements.testimonial': ElementsTestimonial;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
