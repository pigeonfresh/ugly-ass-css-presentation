/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('links', require('./links.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/links @root}}
		</hbs>`,
  require('./data'),
);
