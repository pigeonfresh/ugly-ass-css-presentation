/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('naming', require('./naming.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/naming @root}}
		</hbs>`,
  require('./data'),
);
