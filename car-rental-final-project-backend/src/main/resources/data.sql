-- INSERT INTO car(brand,model,plate_number,status,type,reservation_id,color,picture)
-- VALUES
--     ('Toyota','Camry','12345','0123456789',0,'big',null,'red',
--      'https://cdn.motor1.com/images/mgl/A8QbO/s3/2020-toyota-camry-trd-first-drive.jpg';
--       'https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2019/09/20_CamryTRD_SupersonicRed_MidnightRoof_004.jpg');

INSERT INTO `finalprojectcarrental`.`car` (`id`, `brand`, `color`, `model`, `pictures`, `plate_number`, `status`, `type`)
VALUES ('Toyota', 'Red', 'Camry', 'https://cdn.motor1.com/images/mgl/A8QbO/s3/2020-toyota-camry-trd-first-drive.jpg', '12345', '0', 'big');
