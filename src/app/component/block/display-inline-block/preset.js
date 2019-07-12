/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('display-inline-block', require('./display-inline-block.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/display-inline-block @root}}
		</hbs>`,
  require('./data'),
);
