/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('flexbox-rules', require('./flexbox-rules.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/flexbox-rules @root}}
		</hbs>`,
  require('./data'),
);
