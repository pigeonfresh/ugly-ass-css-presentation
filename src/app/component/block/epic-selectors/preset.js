/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('epic-selectors', require('./epic-selectors.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/epic-selectors @root}}
		</hbs>`,
  require('./data'),
);
