/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('flexbox-aligning', require('./flexbox-aligning.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/flexbox-aligning @root}}
		</hbs>`,
  require('./data'),
);
