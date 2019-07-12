/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('grid', require('./grid.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/grid @root}}
		</hbs>`,
  require('./data'),
);
