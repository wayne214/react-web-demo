import React, {Component} from 'react';
import {WriterInfo, WriterItem, WriterWrapper} from "../styles";

class Writer extends Component{
    render() {
        return(
            <div>
                <WriterItem>
                    <img
                        alt={''}
                        className='writer-pic'
                        src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
                    <WriterInfo>
                        <h4 className='name'>董克平日记</h4>
                        <p className='content'>写了1238k字 5.6k喜欢</p>
                    </WriterInfo>
                </WriterItem>
                <WriterItem>
                    <img
                        alt={''}
                        className='writer-pic'
                        src='https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
                    <WriterInfo>
                        <h4 className='name'>卢璐说</h4>
                        <p className='content'>写了1873.5k字 33.6k喜欢</p>
                    </WriterInfo>
                </WriterItem>
                <WriterItem>
                    <img
                        alt={''}
                        className='writer-pic'
                        src='https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
                    <WriterInfo>
                        <h4 className='name'>梅拾璎</h4>
                        <p className='content'>写了265.8k字 31k喜欢</p>
                    </WriterInfo>
                </WriterItem>
            </div>
        )
    }
}

export default Writer;
