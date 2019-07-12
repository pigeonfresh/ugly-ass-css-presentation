/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('css-structure', require('./css-structure.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/css-structure @root}}
		</hbs>`,
  require('./data'),
);
