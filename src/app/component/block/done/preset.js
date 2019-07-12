/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('done', require('./done.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/done @root}}
		</hbs>`,
  require('./data'),
);
