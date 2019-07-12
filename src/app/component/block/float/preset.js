/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('float', require('./float.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/float @root}}
		</hbs>`,
  require('./data'),
);
