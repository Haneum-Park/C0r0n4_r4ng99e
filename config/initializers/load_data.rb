# ! 필요한 파일들을 로딩합니다.
require 'json'

Rails.application.configure do
	file = File.read(Rails.root.join('app','assets','config','release_data','release_common.json'))
	config.x.release_common = JSON.parse(file)
	puts config.x.release_common

	file = File.read(Rails.root.join('app','assets', 'config', 'release_data', 'data_gwangju.json'))
	config.x.data_gwangju = JSON.parse(file)
	puts config.x.data_gwangju

	file = File.read(Rails.root.join('app','assets', 'config', 'release_data', 'data_mohw.json'))
	config.x.data_mohw = JSON.parse(file)
	puts config.x.data_mohw
end