import {fromJS} from 'immutable'

const initState = fromJS({
    topicList: [
        {
            id: 1,
            name: '社会热点',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 1,
            name: '手绘',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        }
    ],
    articleList: [
        {
            id: 1,
            title: '《两地书》：那么远，这么近',
            des: '美国心理学大师马斯洛（Maslow）在研究了许多历史上伟人共同的人格特质之后，更详细地描绘出“自我实现者”（成长者）的画像。自我实现者有下列16...',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3095874/0a91879a-a25e-4756-8351-ea73f40ff0cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 2,
            title: '戴望舒——在最美的时光里错过',
            des: '日日无事，事复日日，忙忙。亦茫茫。 滴答······滴答······滴答······滴答······ 风雨过后的，叶片上的雨珠正顺着叶子的纹路向...',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/23488806/362faf21-b4f4-42f7-a0a9-0c880a51876e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 3,
            title: '跑步与写作，照见一个明媚的自己',
            des: '我一周至少跑步三次。 有时起得晚了，看见窗外阳光太大，便生出懒意，算了，不跑了。 可转念一想，要是明天阳光还这么大，还起晚了，怎么办？就跟自己较...',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/5403132/addb91d9-4748-4f09-a9c1-45643dcc5946.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
        },
        {
            id: 4,
            title: '我喜欢初冬上午明亮的阳光',
            des: '刚才出去了一趟，昨晚上那场风还没有停息，只是力度小了，花园甬道上到处都是落叶，踩上去很舒服，空气里毫无纤尘，是清澈又冷冽的气味。我心里想，落叶就...',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
        },
        {
            id: 4,
            title: '我喜欢初冬上午明亮的阳光',
            des: '刚才出去了一趟，昨晚上那场风还没有停息，只是力度小了，花园甬道上到处都是落叶，踩上去很舒服，空气里毫无纤尘，是清澈又冷冽的气味。我心里想，落叶就...',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
        },
        {
            id: 4,
            title: '我喜欢初冬上午明亮的阳光',
            des: '刚才出去了一趟，昨晚上那场风还没有停息，只是力度小了，花园甬道上到处都是落叶，踩上去很舒服，空气里毫无纤尘，是清澈又冷冽的气味。我心里想，落叶就...',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
        },
        {
            id: 4,
            title: '我喜欢初冬上午明亮的阳光',
            des: '刚才出去了一趟，昨晚上那场风还没有停息，只是力度小了，花园甬道上到处都是落叶，踩上去很舒服，空气里毫无纤尘，是清澈又冷冽的气味。我心里想，落叶就...',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
        },
        {
            id: 4,
            title: '我喜欢初冬上午明亮的阳光',
            des: '刚才出去了一趟，昨晚上那场风还没有停息，只是力度小了，花园甬道上到处都是落叶，踩上去很舒服，空气里毫无纤尘，是清澈又冷冽的气味。我心里想，落叶就...',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
        },
        {
            id: 4,
            title: '我喜欢初冬上午明亮的阳光',
            des: '刚才出去了一趟，昨晚上那场风还没有停息，只是力度小了，花园甬道上到处都是落叶，踩上去很舒服，空气里毫无纤尘，是清澈又冷冽的气味。我心里想，落叶就...',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
        }
    ]
})

const topic = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default topic
