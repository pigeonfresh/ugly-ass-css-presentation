/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('flexbox', require('./flexbox.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/flexbox @root}}
		</hbs>`,
  require('./data'),
);
