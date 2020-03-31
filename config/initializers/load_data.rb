# ! 필요한 파일들을 로딩합니다.
require 'json'

file = File.read(Rails.root.join('app','assets','config','release_data','release_common.json'))

Rails.application.config.x.release_common = JSON.parse(file)