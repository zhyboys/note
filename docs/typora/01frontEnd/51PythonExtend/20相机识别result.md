# 20 相机识别result

result意思是最终成品

```python
import cv2 as cv
#加载训练数据集文件
recogizer=cv.face.LBPHFaceRecognizer_create()
recogizer.read('trainer/zhy.yml')

def face_detect_demo(img):
    #将图片灰度
    gray=cv.cvtColor(img,cv.COLOR_BGR2GRAY)
    #加载特征数据
    face_detector = cv.CascadeClassifier('C:/Users/THINKPAD/Downloads/opencv/sources/data/haarcascades/haarcascade_frontalface_default.xml')
    faces = face_detector.detectMultiScale(gray)
    for x,y,w,h in faces:
        cv.rectangle(img,(x,y),(x+w,y+h),color=(0,0,255),thickness=2)
        cv.circle(img,center=(x+w//2,y+h//2),radius=(w//2),color=(0,255,0),thickness=2)
        #人脸识别
        id,confidence=recogizer.predict(gray[y:y+h,x:x+w])
        print('label Id:',id,'置信评分：',confidence)
        if(confidence < 50):
            print('hello， zhao')
    cv.imshow('result',img)
#读取视频
cap = cv.VideoCapture(0)
while True:
    flag, frame = cap.read()  # 读取视频的一帧  frame是图片
    # cv.imshow('Vedio Capture', frame)  # 显示图片 'Vedio Capture'是标题
    face_detect_demo(frame)
    if cv.waitKey(1) & 0xFF == ord(' '):  # 等待时常1ms等待按键 如果按下q键，退出
        # cv.imwrite('D:\\999.jpg', frame)  # 把照片写到磁盘
        break
cap.release()  # 释放摄像头
#  关闭所有窗口
cv.destroyAllWindows()
# ========
""" cap=cv.VideoCapture('video.mp4')
while True:
    flag,frame=cap.read()
    # print('flag:',flag,'frame.shape:',frame.shape)
    if not flag:
        break
    face_detect_demo(frame)
    if ord('q') == cv.waitKey(10):
        break
cv.destroyAllWindows()
cap.release() """
```

