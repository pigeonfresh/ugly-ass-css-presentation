/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('pos-absolute', require('./pos-absolute.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/pos-absolute @root}}
		</hbs>`,
  require('./data'),
);
