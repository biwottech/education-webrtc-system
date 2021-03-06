const BUILD_VERSION = process.env.REACT_APP_BUILD_VERSION as string;
const build_version = BUILD_VERSION ? BUILD_VERSION : '1.0.1';

const en = {
  "unknown": "[unknown]: ",
  "from_room": "[Room]: ",
  "student_role": "[Student]: ",
  "teacher_role": "[Teacher]: ",
  "assistant_role": "[Tas]: ",
  "upload_log_failed": "Upload Log failed",
  'create_screen_share_failed': 'Create Screen Share failed',
  "screen_share_permission": "Need Electron Screen Capture Permission",
  "electron": {
    "start_screen_share_failed": "native screen sharing failed"
  },
  "icon": {
    "setting": "Setting",
    "upload-log": "Upload Log",
    "exit-room": "Exit Room",
    "lang-select": "Switch Language",
    "requests_to_connect_the_microphone": "Requests To Connect The Microphone"
  },
  'doc_center': 'Course Document Center',
  'upload_picture': 'Upload Picture',
  'convert_webpage': 'Dynamic PPT',
  'convert_to_picture': 'Static PPT',
  'upload_audio_video': 'Upload Audio/Video',
  'return': {
    'home': 'Back To Home',
  },
  'control_items': {
    "first_page": "First Page",
    "prev_page": "Prev Page",
    "next_page": "Next Page",
    "last_page": "Last Page",
    "stop_recording": "Stop Cloud Recording",
    "recording": "Start Cloud Recording",
    "quit_screen_sharing": "Stop Screen Sharing",
    "screen_sharing": "Start Screen Sharing",
    "delete_current": "Remove Current",
    "delete_all": "Remove All",
  },
  'zoom_control': {
    'folder': 'Document Center',
    'lock_board': 'Set Whiteboard Follow',
    'unlock_board': 'Reset Whiteboard Follow'
  },
  'tool': {
    'selector': 'mouse selector',
    'pencil': 'penceil',
    'rectangle': 'rectangle',
    'ellipse': 'ellipse',
    'eraser': 'eraser',
    'text': 'text',
    'color_picker': 'color picker',
    'add': 'add new page',
    'upload': 'upload ',
    'hand_tool': 'hand selector'
  },
  'error': {
    'not_found': 'Page Not Found',
    'components': {
      'paramsEmpty': 'params：{reason} can`t be empty',
    }
  },
  'whiteboard': {
    'loading': 'Loading...',
    'converting': 'Converting...',
    'global_state_limit': 'globalState size limit size probably overflow',
    'locked_board': 'The teacher is moving the whiteboard. Please do not draw on it.',
    'unlocked_board': 'The whiteboard already unlocked',
  },
  'toast': {
    'upload_log_failure': 'Upload Log Failure，ErrorName: {reason}，see more details in devtool',
    'show_log_id': `Report your log ID: {reason}`,
    'api_login_failured': 'Join Failured, Reason: {reason}',
    'confirm': 'Confirm',
    'cancel': 'Cancel',
    'quit_room': 'Are you sure to exit the classroom?',
    'kick': 'kicked',
    'login_failure': 'login failure',
    'whiteboard_lock': 'Whiteboard follow',
    'whiteboard_unlock': 'Whiteboard nofollow',
    'canceled_screen_share': 'Canceled screen sharing',
    'screen_sharing_failed': 'Screen sharing failed, reason: {reason}',
    'recording_failed': 'Start cloud recording failed, reason: {reason}',
    'start_recording': 'Start cloud recording success',
    'stop_recording': 'Stop cloud recording success',
    'recording_too_short': 'Recording too short, at least 15 seconds',
    'rtm_login_failed': 'login failure, please check your network',
    'rtm_login_failed_reason': 'login failure, reason: {reason}',
    'replay_failed': 'Replay Failed please refresh browser',
    'teacher_exists': 'Teacher already exists, Please waiting for 30s or reopen new class',
    'student_over_limit': 'Student have reached upper limit, , Please waiting for 30s or rejoin new class',
    'teacher_and_student_over_limit': 'The number of students and teacher have reached upper limit',
    'teacher_accept_whiteboard': 'Teacher already grant your whiteboard',
    'teacher_cancel_whiteboard': 'Teacher already cancel your whiteboard',
    'teacher_accept_co_video': 'Teacher already accept co-video',
    'teacher_reject_co_video': 'Teacher already rejected co-video',
    'teacher_cancel_co_video': 'Teacher already canceled co-video',
    'student_cancel_co_video': 'Student canceled co-video',
    'student_peer_leave': '"{reason}" Left',
    'student_send_co_video_apply': '"{reason}" send the co-video request',
    'stop_co_video': 'Stop "{reason}" co-video',
    'reject_co_video': 'Reject co-video',
    'close_co_video': 'Close co-video',
    'close_youself_co_video': 'Stop co-video',
    'accept_co_video': 'Accept co-video',
    'successfully_joined_the_room': 'Successfully joined the room',
    'failed_to_join_the_room': 'Failed to join the room',
    'failed_to_authorize_whiteboard': 'Failed to authorize whiteboard',
    'failed_to_deauthorize_whiteboard': 'Failed to deauthorize whiteboard',
    'failed_to_query_playback_list': 'Failed to query playback list',
    'audio_equipment_has_changed': 'Audio equipment has changed',
    'video_equipment_has_changed': 'Video equipment has changed',
    'failed_to_initiate_screen_sharing': 'Failed to initiate screen sharing',
    'failed_to_end_screen_sharing': 'Failed to end screen sharing',
    'failed_to_initiate_screen_sharing_to_remote': 'Failed to initiate screen sharing to remote',
    'failed_to_enable_screen_sharing': 'Failed to enable screen sharing',
    'failed_to_enable_screen_sharing_permission_denied': 'Open screen capture failed！Please grant permission for screen capture!',
    'failed_to_send_chat': 'Failed to send chat',
    'failed_to_join_rtc_please_refresh_and_try_again': 'Failed to join rtc, please refresh and try again',
    'leave_rtc_channel': 'Leave rtc channel',
    'failed_to_leave_rtc': 'Failed to leave rtc',
    'co_video_close_success': 'CoVideo dismissed success',
    'co_video_close_failed': 'CoVideo dismissed failure',
    'publish_rtc_success': 'Publish RTC Success',
    'open_whiteboard_follow': 'open whiteboard follow',
    'close_whiteboard_follow': 'close whiteboard follow',
    'i': 'I',
    'teacher': 'Teacher',
    'the_teacher_authorized_your_whiteboard': 'The teacher authorized your whiteboard',
    'the_teacher_cancelled_your_whiteboard_permission': 'The teacher cancelled your whiteboard permission',
    'publish_business_flow_successfully': 'Publish business flow successfully',
    'media_method_call_failed': 'Media method call failed',
    'successfully_left_the_business_channel': 'Successfully left the business channel',
    'course_started_successfully': 'Course start successfully',
    'setting_start_failed': 'Setting start failed',
    'the_course_ends_successfully': 'Course end successfully',
    'setting_ended_failed': 'Setting ended failed',
    'start_recording_successfully': 'Start recording successfully',
    'start_recording_failed': 'Start recording failed',
    'successfully_ended_recording': 'Successfully_ended_recording',
    'failed_to_end_recording': 'Failed to end recording',
    'you_have_a_default_message': 'You have a default message',
    'the_teacher_agreed': 'Teacher Agreed',
    'student_applied': 'Student applied',
    'you_were_dismissed_by_the_teacher': 'You were dismissed by the teacher',
    'student_canceled': 'Student canceled',
    'the_teacher_refused': 'Teacher refused',
    'failed_to_initiate_a_raise_of_hand_application': 'Failed to initiate a raise of hand application',
    'failed_to_end_the_call': 'Failed to end the call',
  },
  'notice': {
    'student_interactive_apply': `"{reason}" wants to interact with you`
  },
  'chat': {
    'placeholder': 'Input Message',
    'banned': 'Banned',
    'send': 'send',
    'gif': 'gif',
    'emoji': 'emoji'
  },
  'device': {
    'camera': 'Camera',
    'microphone': 'Microphone',
    'speaker': 'Speaker',
    'finish': 'Finish',
    'detect': 'Detect',
    'test_again': 'Test again',
    'close': 'Close',
    'test_report': 'Test report',
    'is_look': 'Can you see the screen?',
    'no': 'No',
    'yes': 'Yes',
    'is_hear': 'Can you hear the music while the music is playing?',
    'click_play': 'Start to detect speakers after clicking play',
    'test_microphone': 'What to say to the microphone, check if the microphone is normal'
    
  },
  'nav': {
    'delay': 'Delay: ',
    'network': 'Network: ',
    'cpu': 'CPU: ',
    'class_end': 'Class end',
    'class_start': 'Class start',
    'back': 'Back',
  },
  'home': {
    'entry-home': 'Join Classroom',
    'teacher': 'teacher',
    'student': 'student',
    'assistant': 'tas',
    'cover_class': 'cover-en',
    'room_name': 'Room Name',
    'nickname': 'Your Name',
    'room_type': 'Room Type',
    'room_join': 'Join',
    'short_title': {
      'title': 'eEducation Cloud Class',
      'subtitle': 'Online learning engagement platform',
    },
    'name_too_long': 'name too long, should <= 20 characters',
    '1v1': 'One to One Classroom',
    'mini_class': 'Small Classroom',
    'large_class': 'Lecture Hall',
    'super_mini_class': 'Super Small Classroom',
    'missing_room_name': 'missing room name',
    'missing_your_name': 'missing your name',
    'missing_password': 'missing password',
    'missing_role': 'missing role',
    'account': 'Name',
    'password': 'Password',
  },
  'room': {
    'show': 'Show',
    'course_list': 'Room List',
    'chat_room': 'Chat Room',
    'student_list': 'Student List',
    'uploading': 'Uploading...',
    'converting': 'Converting...',
    'upload_success': 'upload success',
    'upload_failure': 'upload failure, check the network',
    'convert_success': 'convert success',
    'convert_failure': 'convert failure, check the network',
  },
  'replay': {
    'loading': 'loading...',
    'recording': 'In Recording',
    'finished': 'Finished',
    'finished_recording_to_be_download': 'Server prepare downloading',
    'finished_download_to_be_convert': 'Server prepare converting',
    'finished_convert_to_be_upload': 'Server prepare saving',
  },
  'assistant': {
    'className': 'className',
    'creatTime': 'creatTime',
    'operation': 'operation',
    'classList': 'classList',
    'enterClassRoom': 'enterClassRoom',
    'data_null_text': 'There is no class currently in session, you can refresh or exit the interface',
    'refresh': 'refresh',
    'exit': 'exit',
  },
  'course_recording': 'course recording',
  'build_version': `build version: ${build_version}`,
}

export default en;