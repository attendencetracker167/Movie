package com.infy.service;

import java.util.List;
import java.util.Optional;

import com.infy.dto.AssetDTO;
import com.infy.entity.Asset;

public interface AssetService {

	List<Asset> getAllAssets();
	Asset getAssetById(Long id);
	Asset addAsset(Asset asset);
	Asset updateAsset(Long id,Asset asset);
	void deleteAsset(Long id);
}
