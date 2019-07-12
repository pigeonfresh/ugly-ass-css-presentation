/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('inspect-tips', require('./inspect-tips.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/inspect-tips @root}}
		</hbs>`,
  require('./data'),
);
