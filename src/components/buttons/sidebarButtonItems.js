import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';

export const sidebarButtonItems = {
  Inbox: <InboxIcon style={{width: '20px'}}/>,
  Trash: <DeleteIcon style={{width: '20px'}} />,
  Sent: <SendIcon style={{width: '20px'}}/>,
  Spam: <ErrorIcon style={{width: '20px'}}/>,
  Drafts: <InsertDriveFileIcon style={{width: '20px'}}/>,
  Starred: <StarIcon style={{width: '20px'}}/>,
  Snoozed: <WatchLaterIcon style={{width: '20px'}}/>,
  Label: <LabelIcon style={{width: '20px'}}/>,
  More: <ExpandMoreIcon style={{width: '20px'}}/>,
};
