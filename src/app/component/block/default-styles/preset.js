/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('default-styles', require('./default-styles.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/default-styles @root}}
		</hbs>`,
  require('./data'),
);
