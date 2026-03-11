import List from './list';
import ListItem from './list-item';
import ListItemMeta from './list-item-meta';

type IList = typeof List & {
  Item: typeof ListItem;
  ItemMeta: typeof ListItemMeta;
};

const DefaultList = List as IList;
DefaultList.Item = ListItem;
DefaultList.ItemMeta = ListItemMeta;

export default DefaultList;
