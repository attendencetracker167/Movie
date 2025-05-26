package com.infy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dto.AssetDTO;
import com.infy.entity.Asset;
import com.infy.repository.AssetRepository;
@Service
public class AssetServiceImpl implements AssetService{
	
	@Autowired
	private AssetRepository repo;
	
	@Override
	public List<Asset> getAllAssets(){
		return repo.findAll();
	}
	
	@Override
	public Asset getAssetById(Long id) {
		return repo.findById(id).orElseThrow();
	}
	
	@Override
	public Asset addAsset(Asset asset) {
		return repo.save(asset);
	}
	
	@Override
	public Asset updateAsset(Long id,Asset updateAsset) {
		Asset asset=repo.findById(id).orElseThrow();
		asset.setName(updateAsset.getName());
		asset.setType(updateAsset.getType());
		asset.setStatus(updateAsset.getStatus());
		asset.setAssignedToScene(updateAsset.getAssignedToScene());
		asset.setShootingDay(updateAsset.getShootingDay());
		asset.setBarCode(updateAsset.getBarCode());
		asset.setMaintenanceSchedule(updateAsset.getMaintenanceSchedule());;
		return repo.save(asset);
	}
	
	@Override
	public void deleteAsset(Long id) {
		repo.deleteById(id);
	}
	
}

	
	


