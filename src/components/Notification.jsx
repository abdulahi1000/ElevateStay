import { Button, notification, Space } from 'antd';

const openNotification = (type, title, content) => {
  notification[type]({
    message: title,
    description: content,
  });
};

export default openNotification