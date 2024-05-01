import {
  getPageBySlug,
  transformContentfulData,
} from '../../services/contentful.service';

export const load = async () => {
  const pageData = await getPageBySlug('/');


  // const contentfuldata=transformContentfulData(pageData);

  const components=pageData.items[0]?.fields.sections;
return components;
};
