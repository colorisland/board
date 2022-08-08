export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '회원',
        route: '/member',
        icon: 'cil-puzzle',
        items: [
          {
            name: '회원 리스트',
            to: '/member/member-list'
          },
          {
            name: '제재된 회원',
            to: '/member/ban-list'
          },
          
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '콘텐츠',
        route: '/content/story',
        icon: 'cil-puzzle',
        items: [
          {
            name: '스토리',
            to: '/content/story'
          },
          {
            name: '댓글',
            to: '/content/comment'
          },
          {
            name: '신고 스토리',
            to: '/content/report-story'
          },
          {
            name: '신고 댓글',
            to: '/content/report-comment'
          },
          {
            name: '목소리(mp3)',
            to: '/content/voice'
          },
          {
            name: '내려받기(mp4)',
            to: '/content/downloadlist'
          },
          {
            name: '회원',
            to: '/content/board'
          },
        ]
      },
      //분리
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Extras']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Pages',
        route: '/pages',
        icon: 'cil-star',
        items: [
          {
            name: 'Signin',
            to: '/pages/signin'
          },
          {
            name: 'Register',
            to: '/pages/register'
          },
          {
            name: 'Error 404',
            to: '/pages/404'
          },
          {
            name: 'Error 500',
            to: '/pages/500'
          },
          {
            name: 'Forms',
            to: '/pages/forms'
          }
        ]
      },
    ]
  }
]